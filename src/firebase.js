// src/firebase.js

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
// src/firebase.js
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1qmFeOw49tvwGd6EZUFdSh0K8y1wMYCI",
  authDomain: "berg-infotech.firebaseapp.com",
  projectId: "berg-infotech",
  storageBucket: "berg-infotech.firebasestorage.app",
  messagingSenderId: "1074218012331",
  appId: "1:1074218012331:web:5aa8f03596ba7c270071ee",
  measurementId: "G-J2CFLM0KRC"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app); // <-- make sure this is exported

export { db };