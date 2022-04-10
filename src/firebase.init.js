// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA08Dj9H2_QdlaSTzF5VpsZYD40Dx946-I",
    authDomain: "ema-john-simple-7ba34.firebaseapp.com",
    projectId: "ema-john-simple-7ba34",
    storageBucket: "ema-john-simple-7ba34.appspot.com",
    messagingSenderId: "480188560634",
    appId: "1:480188560634:web:2203fbf938c0e706f14543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth