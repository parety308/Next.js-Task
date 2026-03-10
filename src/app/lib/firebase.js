// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWbaYrWPBeus2ES3bESSyqY41LIEPDt08",
    authDomain: "coursehub-5968b.firebaseapp.com",
    projectId: "coursehub-5968b",
    storageBucket: "coursehub-5968b.firebasestorage.app",
    messagingSenderId: "479955736804",
    appId: "1:479955736804:web:ce5026984b4b90960674f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);