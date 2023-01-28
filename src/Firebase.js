import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_Sg38P0m3CA6il480m1facVDf3gENdfo",
  authDomain: "redux-crud-38266.firebaseapp.com",
  databaseURL: "https://redux-crud-38266-default-rtdb.firebaseio.com",
  projectId: "redux-crud-38266",
  storageBucket: "redux-crud-38266.appspot.com",
  messagingSenderId: "115995396874",
  appId: "1:115995396874:web:af0a9a012b08403105c8f3"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);