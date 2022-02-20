// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxXopTixGnm-nkL-MRN7reNR6TYD4ESyw",
  authDomain: "study-link-73d96.firebaseapp.com",
  projectId: "study-link-73d96",
  storageBucket: "study-link-73d96.appspot.com",
  messagingSenderId: "336935195401",
  appId: "1:336935195401:web:e38c26a99dbb27c92939d8",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Authentication
const auth = getAuth();

// Firestore Database
const db = getFirestore();

export { auth, db };
