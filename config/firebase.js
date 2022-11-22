// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGdoPrQYHN7Ev6pz4PSUGSJpTmSdzsTes",
  authDomain: "myhealthauth.firebaseapp.com",
  projectId: "myhealthauth",
  storageBucket: "myhealthauth.appspot.com",
  messagingSenderId: "1035708084599",
  appId: "1:1035708084599:web:6a46efd0f5a2c3c9023172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true})
export {app, auth, db}