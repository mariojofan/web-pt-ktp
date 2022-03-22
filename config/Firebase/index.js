// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref as reference, onValue as on} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1ZjRYWzdV2awXaRHO0PqZomJNFFrPi_g",
  authDomain: "pt-ktp-c56f3.firebaseapp.com",
  projectId: "pt-ktp-c56f3",
  storageBucket: "pt-ktp-c56f3.appspot.com",
  messagingSenderId: "632843162966",
  appId: "1:632843162966:web:bb7f5e1b0c3ef053cb72f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase;
export const ref = reference;
export const onValue = on;
