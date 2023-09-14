// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDazt5ogcTenYTv5HAgGAfuwwAQ9hw3zI",
    authDomain: "menu-x-353fd.firebaseapp.com",
    databaseURL: "https://menu-x-353fd-default-rtdb.firebaseio.com",
    projectId: "menu-x-353fd",
    storageBucket: "menu-x-353fd.appspot.com",
    messagingSenderId: "206698905311",
    appId: "1:206698905311:web:490048277c149807d7b36a",
    measurementId: "G-R0N8PJ9XH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
const db = getFirestore(app);
// const analytics = getAnalytics(app);
// const ddb = firebase.firestore();

export { db };