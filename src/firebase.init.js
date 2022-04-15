// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwncG-JHN1XLKmesg1Udfj5642cu6ZDoQ",
    authDomain: "red-onion-2022.firebaseapp.com",
    projectId: "red-onion-2022",
    storageBucket: "red-onion-2022.appspot.com",
    messagingSenderId: "354581903874",
    appId: "1:354581903874:web:8c9b7597f25b6e081d851b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;