// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL7myXGUMK99KVy93WhfqvT35I9iAlYEM",
  authDomain: "preparewallah-7d86c.firebaseapp.com",
  databaseURL: "https://preparewallah-7d86c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "preparewallah-7d86c",
  storageBucket: "preparewallah-7d86c.appspot.com",
  messagingSenderId: "398417337359",
  appId: "1:398417337359:web:511b90d757f11753fa177a",
  measurementId: "G-QTKGJ7HYG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth();