// import { toast } from "react-toastify";
// import firebase from "../../config/firebase";
// import { RepositoryFactory } from "../../repository/RepositoryFactory";
// import { enqueueSnackbar } from "notistack";

// let User = RepositoryFactory.get("user");

// // Import the "Loader" action if not already done

// export const addNewUser = (
//   payload,
//   permissions,
//   onSuccess = () => {}
// ) => async (dispatch) => {
//   console.log(payload);
//   console.log(permissions);

//   try {
//     dispatch(Loader(true));
//     const { data } = await User.add(payload);
//     if (data.success) {
//       if (Object.keys(permissions).length > 0) {
//         await firebase
//           .firestore()
//           .collection("permissions")
//           .add({
//             userID: data.data.id,
//             ...permissions,
//           });
//       }
//       onSuccess();
//       dispatch({
//         type: "STAFF_ADDED",
//         payload: data.data,
//       });

//       dispatch(Loader(false));
//     } else {
//       console.log("errr", data);
//       enqueueSnackbar(data.message);
//       dispatch(Loader(false));
//     }
//   } catch (error) {
//     // console.log("error", error);
//     enqueueSnackbar(error?.response?.data?.message);
//     dispatch(Loader(false)); // Set loading state to false
//   }
// };

// export const login = (creds) => {
//   return (dispatch) => {
//     dispatch({
//       type: "LOGIN_REQUEST",
//     });
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(creds.email, creds.password)
//       .then((data) => {
//         // var docRef = firebase
//         // 	.firestore()
//         // 	.collection('users')
//         // 	.doc(data.user.uid);
//         // docRef.get().then(doc => {
//         // 	if (doc.exists) {
//         dispatch(reRegisterSnapshot(data.user?.uid));
//         // 	} else {
//         // 		toast.warning(
//         // 			'You are not allowed to access this panel'
//         // 		);
//         // 		dispatch({
//         // 			type: 'LOGIN_REQUEST_END',
//         // 		});
//         // 	}
//         // });
//         toast.success("Login success!");
//       })
//       .catch((error) => {
//         dispatch({
//           type: "LOGIN_FAIL",
//           uid: "",
//           error: error,
//         });
//         dispatch({
//           type: "LOGIN_REQUEST_END",
//         });
//         toast.warning(error.message);
//       });
//   };
// };

// export const logout = () => {
//   return (dispatch) => {
//     firebase
//       .auth()
//       .signOut()
//       .then((data) => {
//         dispatch({
//           type: "LOGOUT_SUCCESS",
//           uid: "",
//           user: "",
//           error: "",
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: "LOGOUT_FAIL",
//           uid: "",
//           error: error,
//         });
//       });
//   };
// };

// export const forgetPassword = (email, onSuccess = () => {}) => async (
//   dispatch
// ) => {
//   dispatch(forgetLoader(true));
//   try {
//     await firebase
//       .auth()
//       .sendPasswordResetEmail(email)
//       .then((res) => {
//         dispatch(forgetLoader(false));
//         enqueueSnackbar("Please check your email and reset the password");
//         onSuccess();
//       })
//       .catch((err) => {
//         dispatch(forgetLoader(false));
//         enqueueSnackbar(err.message);
//       });
//   } catch (error) {
//     dispatch(forgetLoader(false));
//     enqueueSnackbar(error.message);
//   }
// };

// export const reRegisterSnapshot = (id) => async (dispatch) => {
//   firebase
//     .firestore()
//     .collection("users")
//     .doc(id)
//     .onSnapshot(async (doc) => {
//       let user = doc.data();
//       if (user?.type === "kitchen-cook" || user?.type === "kitchen-admin") {
//         dispatch(getPermissions(doc.id));
//       }
//       if (user?.type === "restaurant") {
//         if (user?.subscription?.subscriptionID) {
//           await User.getSubscriptionStatus(user?.subscription?.subscriptionID)
//             .then((res) => {
//               // console.log(res, "<<<getSubscriptionStatus");
//             })
//             .catch((ex) => {
//               // enqueueSnackbar(ex.message);
//             });
//         }
//       }
//       dispatch({
//         type: "LOGIN_SUCCESS",
//         user: { id: doc.id, ...doc.data() },
//         error: "",
//       });
//       dispatch({
//         type: "LOGIN_REQUEST_END",
//       });
//     });
// };

// export const getPermissions = (id) => async (dispatach) => {
//   let permissionsData = {};
//   firebase
//     .firestore()
//     .collection("permissions")
//     .where("userID", "==", id)
//     .limit(1)
//     .get()
//     .then(async (querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         permissionsData = { id: doc.id, ...doc.data() };
//       });
//       await dispatach({
//         type: "PERMISSIONS",
//         payload: permissionsData,
//       });
//     })
//     .catch((error) => {
//       console.error("Error getting documents: ", error);
//     });
// };

// export const updateColors = (id, payload) => async (dispatch) => {
//   await firebase
//     .firestore()
//     .collection("users")
//     .doc(id)
//     .update({ ...payload })
//     .then(toast.success("Restaurant colors updated"));
// };

// const Loader = (data) => async (dispatch) => {
//   dispatch({
//     type: "CATALOG_LOADER",
//     payload: data,
//   });
// };

// const forgetLoader = (data) => async (dispatch) => {
//   dispatch({
//     type: "FORGET_LOADER",
//     payload: data,
//   });
// };
// export const adminSignUp = (payload, password, onSuccess) => async (
//   dispatch
// ) => {
//   console.log("signUp", { payload });
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(payload.email, password)
//     .then((data) => {
//       firebase
//         .firestore()
//         .collection("users")
//         .doc(data.user?.uid)
//         .set({
//           ...payload,
//           restaurantID: data?.user?.uid,
//           isDeleted: false,
//           status: "active",
//           subScriptionStatus: "subscribe",
//           currency: "USD",
//           language: "en",
//           type: "restaurant",
//           restaurantLogo: "",
//           createdAt: firebase.firestore.Timestamp.now(),
//         })
//         .then((res) => {
//           toast.success("Account Registered successfully");
//           onSuccess();
//           // enqueueSnackbar('Account Registered successfully')
//         })
//         .catch((err) => {
//           // dispatch(signupLoader(false));
//           enqueueSnackbar(err, "danger");
//         });
//     })
//     .catch((err) => {
//       // dispatch(signupLoader(false));
//       enqueueSnackbar(err.message);
//     });
// };
