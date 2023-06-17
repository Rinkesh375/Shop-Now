// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOB099w_jMZGoEIgegc2RaW7DGUarfCgE",
  authDomain: "shopnow-9b8d5.firebaseapp.com",
  projectId: "shopnow-9b8d5",
  storageBucket: "shopnow-9b8d5.appspot.com",
  messagingSenderId: "426916962318",
  appId: "1:426916962318:web:dc9a667b829a6dd0251c5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth()
export {app,auth}