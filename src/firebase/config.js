import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn7qVo3R7g0-D1Inbo2n9OF1bgf5iMv0s",
  authDomain: "rj-mi-proyecto.firebaseapp.com",
  projectId: "rj-mi-proyecto",
  storageBucket: "rj-mi-proyecto.appspot.com",
  messagingSenderId: "283138224806",
  appId: "1:283138224806:web:56172282e1f69d389fba67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 