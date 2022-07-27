// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLcW6I4awJO5-50Frf8MsKsJQkm0CleA4",
  authDomain: "assesments-for-interviews.firebaseapp.com",
  projectId: "assesments-for-interviews",
  storageBucket: "assesments-for-interviews.appspot.com",
  messagingSenderId: "602848050299",
  appId: "1:602848050299:web:116da1fbe27c4a867af6de",
  measurementId: "G-EPSV4P0K2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);