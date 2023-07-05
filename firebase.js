// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDytCyV0W5e3ZI2wak4PVHuIMJtfosE5Vs",
  authDomain: "uber-clone-d389a.firebaseapp.com",
  projectId: "uber-clone-d389a",
  storageBucket: "uber-clone-d389a.appspot.com",
  messagingSenderId: "111827842639",
  appId: "1:111827842639:web:703d3c8dfcf55009985c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app,provider,auth};