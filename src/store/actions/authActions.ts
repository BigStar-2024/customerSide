// // import firebase from '../../config/firebase'
// import { toast } from 'react-toastify'
// import { v4 as uuidv4 } from 'uuid'
// import algoliasearch from 'algoliasearch'
// import { createNullCache } from '@algolia/cache-common'
// import { enqueueSnackbar } from 'notistack'
// import axios from 'axios';
// import UserInfo from '../../types/redux/Auth';
// import { Dispatch } from 'react';
// import { AnyAction } from 'redux'


// export const customerSignUp = (payload: UserInfo, onSuccess: (value: any) => void) => async (dispatch: Dispatch<AnyAction>) => {
//     console.log('signUp', { payload })
//     dispatch({
//         type: "ADD_NEW_USER_LOADER",
//         payload: true
//     })
//     try {
//         const newUser = {
//             ...payload
//         }
//         const docRef = await firebase.firestore().collection('customerUsers').add(newUser);

//         const userDoc = await firebase
//             .firestore()
//             .collection('customerUsers')
//             .doc(docRef.id)
//             .get()

//         dispatch({
//             type: "ADD_NEW_USER",
//             payload: {
//                 id: docRef.id,
//                 ...userDoc.data()
//             }
//         })

//         onSuccess({
//             type: 'user',
//             id: docRef.id,
//             ...userDoc.data()
//         })

//         toast.success("User SignUp Successfully");

//         dispatch({
//             type: "ADD_NEW_USER_LOADER",
//             payload: false
//         });


//     } catch (error: any) {
//         console.log('Error signup user: ', error.message)
//         toast.warn(error.message)
//         dispatch({
//             type: 'ADD_NEW_USER_LOADER',
//             payload: false
//         })
//     }

// }