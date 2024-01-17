// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSCoATMqNYYRxMpbNL_mGI7x4Mc9HfvUk",
  authDomain: "playground-15214.firebaseapp.com",
  projectId: "playground-15214",
  storageBucket: "playground-15214.appspot.com",
  messagingSenderId: "31675501679",
  appId: "1:31675501679:web:a2b95df460a94fcb14519a",
  measurementId: "G-FL6PEPXY70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default {
  db
}