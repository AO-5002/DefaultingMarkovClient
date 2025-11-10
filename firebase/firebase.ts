// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPVVoI0Z1w6WgUXY_drVvihDwvmtE1bPI",
  authDomain: "csv-client.firebaseapp.com",
  projectId: "csv-client",
  storageBucket: "csv-client.firebasestorage.app",
  messagingSenderId: "736760310045",
  appId: "1:736760310045:web:36aba23e79804739f799f4",
  measurementId: "G-X0E4FG77E5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
