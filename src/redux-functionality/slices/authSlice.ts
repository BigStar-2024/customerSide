
import UserInfo, { UpdateAuthAction } from "../../types/redux/Auth";
import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { collection, addDoc, getDoc, doc, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import algoliasearch from 'algoliasearch'
import { createNullCache } from '@algolia/cache-common'
import { enqueueSnackbar } from 'notistack'
import axios from 'axios'
import { Dispatch } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
// import { SerializedError } from "../../types/redux/Error";

const authState: any = {
    userInfo: { userName: "", userEmail: "", userPassword: "", userGender: "", userBirth: "" },
    status: "idle",
    error: "",
    loginInfo: { email: "", password: "" },
    currentUser: "",
}



export const userSignUp = createAsyncThunk("auth/userSignUp", async (userInfo: UserInfo) => {
    let errorCode: string;
    let errorMessage: string;
    const auth = getAuth();
    const result = createUserWithEmailAndPassword(auth, userInfo.userEmail, userInfo.userPassword)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const docRef = addDoc(collection(db, "customerUser"), { ...userInfo, userID: user.uid });
            // console.log("docRef")
            // toast.success("Account Registered successfully")
            return "Sign Up Success!"
        })
        .catch((error) => {
            errorCode = error.code;
            errorMessage = error.message;
            // console.log("userCredentialCode: ", errorCode);
            // console.log("userCredentialMessage: ", errorMessage);
            switch (errorMessage) {
                case "Firebase: Error (auth/email-already-in-use).":
                    throw new Error("email is used already!");
                case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                    throw new Error("Please password should be at least 6 characters");
                case "Firebase: Error (auth/invalid-email).":
                    throw new Error("invalid-email");

            }
            // toast.error(errorMessage);
            // throw new Error(errorMessage)
        });
    return result;
})



export const userLogin = createAsyncThunk("auth/userLogin", async (loginInfo: { email: string, password: string }) => {
    const auth = getAuth();
    const result = signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return user.email;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (errorMessage) {
                case "Firebase: Error (auth/user-not-found).":
                    throw new Error("user not found. please sign up!");
                case "Firebase: Error (auth/wrong-password).":
                    throw new Error("password wrong");
                case "Firebase: Error (auth/invalid-email).":
                    throw new Error("invalid-email");
            }
        });
    return result;
})



export const userSlice = createSlice({
    name: UpdateAuthAction,
    initialState: authState,
    reducers: {
        successAuth: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        addToUser: (state, action: PayloadAction<UserInfo>) => {
            const { userName, userEmail, userPassword, userGender, userBirth } = action.payload;

            state.userInfo.userName = userName;
            state.userInfo.userEmail = userEmail;
            state.userInfo.userPassword = userPassword;
            state.userInfo.userGender = userGender;
            state.userInfo.userBirth = userBirth;
            // console.log("newUser", action);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(userSignUp.fulfilled, (state, action) => {
                state.status = action.payload;
            })
            .addCase(userSignUp.rejected, (state, action) => {
                if (action.error.message) {
                    // console.log("userSignUpRejected: ", action.error.message);
                    // toast.error(action.error.message)
                    state.error = action.error.message;
                }
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                if (action.payload) {
                    state.currentUser = action.payload;
                }
            })
            .addCase(userLogin.rejected, (state, action) => {
                if (action.error.message) {
                    state.error = action.error.message;
                }
            })
    }
});
export const { addToUser, successAuth } = userSlice.actions;

export default userSlice.reducer;
