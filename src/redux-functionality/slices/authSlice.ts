
import UserInfo, { UpdateAuthAction } from "../../types/redux/Auth";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import algoliasearch from 'algoliasearch'
import { createNullCache } from '@algolia/cache-common'
import { enqueueSnackbar } from 'notistack'
import axios from 'axios'
import { Dispatch } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

// const userInfo: UserInfo = {
//     userName: "",
//     userEmail: "",
//     userPassword: "",
//     userGender: "",
//     userBirth: ""
// }

const initialState = {
    userInfo: { userName: "", userEmail: "", userPassword: "", userGender: "", userBirth: "" },
    status: "idle",
    error: null,
}



export const userSignUp = createAsyncThunk("auth/userSignUp", async (userInfo: UserInfo) => {
    try {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userInfo.userEmail, userInfo.userPassword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const docRef = addDoc(collection(db, "customerUser"), { ...userInfo, userID: user.uid });
                console.log("docRef")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

        toast.success("Account Registered successfully")
        // onSuccess();
    } catch (error: any) {
        enqueueSnackbar(error.message)
    } finally {
        return "success"
    }
})

export const userSlice: any = createSlice({
    name: UpdateAuthAction,
    initialState,
    reducers: {
        addToUser: (state, action: PayloadAction<UserInfo>) => {
            const { userName, userEmail, userPassword, userGender, userBirth } = action.payload;

            state.userInfo.userName = userName;
            state.userInfo.userEmail = userEmail;
            state.userInfo.userPassword = userPassword;
            state.userInfo.userGender = userGender;
            state.userInfo.userBirth = userBirth;
            console.log("newUser", action);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(userSignUp.fulfilled, (state, action) => {
                state.status = action.payload;
            })
    }
});
export const { addToUser } = userSlice.actions;

export default userSlice.reducer;
