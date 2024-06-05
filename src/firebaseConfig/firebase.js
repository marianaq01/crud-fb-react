// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK1ZNBwa7RV499A-jbvzYppPiNN4RdeQs",
  authDomain: "carritoej24pw-5ed41.firebaseapp.com",
  projectId: "carritoej24pw-5ed41",
  storageBucket: "carritoej24pw-5ed41.appspot.com",
  messagingSenderId: "527817246148",
  appId: "1:527817246148:web:d9e0785d4f3aa4328ad091",
  measurementId: "G-E77C2QLXG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)