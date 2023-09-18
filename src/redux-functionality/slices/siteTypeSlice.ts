
import UserInfo, { UpdateAuthAction } from "../../types/redux/Auth";
import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";
import { collection, addDoc, getDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify'
// import { v4 as uuidv4 } from 'uuid'
// import algoliasearch from 'algoliasearch'
// import { createNullCache } from '@algolia/cache-common'
// import { enqueueSnackbar } from 'notistack'
// import axios from 'axios'
// import { Dispatch } from "react";
import { SiteTypeInfo } from "../../types/redux/siteType"
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
// import { SerializedError } from "../../types/redux/Error";
import { useAppSelector, RootState } from "../index"
import { useSelector } from "react-redux";

const siteTypeData: SiteTypeInfo = {
    backgroundColor: "",
    backgroundImage: "",
    borderColor: "",
    categoryColor: "",
    colorMode: true,
    coverImage: "",
    entireColor: "",
    fontSize: "",
    fontWeight: false,
    itemColor: "",
    logoImage: "",
    mainFont: "",
    patternSize: 1,
    patternTilt: "",
    priceColor: "",
    restaurantID: "",
    secondaryFont: "",
    secondaryFontSize: "",
}

const siteTypeInfo = {
    siteTypeData,
    status: "",
    error: "",
}



export const siteTypeThunk = createAsyncThunk("siteType/siteType", async () => {

    const fetchData = { ...siteTypeData };

    try {
        const querySnapshot = await getDocs(collection(db, "customization"));

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // console.log("squery", data);

            fetchData.backgroundColor = data.backgroundColor;
            fetchData.backgroundImage = data.backgroundImage;
            fetchData.borderColor = data.borderColor;
            fetchData.categoryColor = data.categoryColor;
            fetchData.colorMode = data.colorMode;
            fetchData.coverImage = data.coverImage;
            fetchData.entireColor = data.entireColor;
            fetchData.fontSize = data.fontSize;
            fetchData.fontWeight = data.fontWeight;
            fetchData.itemColor = data.itemColor;
            fetchData.mainFont = data.mainFont;
            fetchData.patternSize = data.patternSize;
            fetchData.patternTilt = data.patternTilt;
            fetchData.priceColor = data.priceColor;
            fetchData.restaurantID = data.restaurantID;
            fetchData.secondaryFont = data.secondaryFont;
            fetchData.secondaryFontSize = data.secondaryFontSize;
        });

        // console.log("fetchData", fetchData)
        return fetchData;

    } catch (error: any) {
        // console.log("error: ", error.message);
        const err: string = error.message;
        throw new Error(err);
    }
});


export const siteTypeSlice = createSlice({
    name: UpdateAuthAction,
    initialState: siteTypeInfo,
    reducers: {
        // successAuth: (state, action: PayloadAction<string>) => {
        //     state.error = action.payload
        // },
        // addToUser: (state, action: PayloadAction<UserInfo>) => {
        //     const { userName, userEmail, userPassword, userGender, userBirth } = action.payload;

        //     state.userInfo.userName = userName;
        //     state.userInfo.userEmail = userEmail;
        //     state.userInfo.userPassword = userPassword;
        //     state.userInfo.userGender = userGender;
        //     state.userInfo.userBirth = userBirth;
        //     // console.log("newUser", action);
        // },
    },
    extraReducers(builder) {
        builder
            .addCase(siteTypeThunk.fulfilled, (state, action) => {
                console.log("actionPayloadFulfilled: ", action.payload);
                if (action.payload) {
                    state.siteTypeData = { ...action.payload }
                    // return action.payload;
                }
            })
            .addCase(siteTypeThunk.rejected, (state, action) => {
                console.log("actionPayloadRejected: ", action.error);
                if (action.error) {
                    state.error = action.error.message ? action.error.message : "";
                    // return action.payload;
                }
            })
    }
});

export const { } = siteTypeSlice.actions;


export default siteTypeSlice.reducer;
