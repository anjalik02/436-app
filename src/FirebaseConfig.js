// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWU1-5_wLjdlS_mzOsu9iDWW3jlsTYEYQ",
  authDomain: "kahamusic-450ea.firebaseapp.com",
  projectId: "kahamusic-450ea",
  storageBucket: "kahamusic-450ea.appspot.com",
  messagingSenderId: "460791591232",
  appId: "1:460791591232:web:9172d75d31602dc0e1caa5",
  measurementId: "G-E395YV5W4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}