// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTmoNfqVyXfAnqfaRjcKJQPoc4NrAGHq8",
  authDomain: "kodigo-app-e6a02.firebaseapp.com",
  projectId: "kodigo-app-e6a02",
  storageBucket: "kodigo-app-e6a02.appspot.com",
  messagingSenderId: "264832155191",
  appId: "1:264832155191:web:ca24886e99940ed65b09b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);