// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCucfS4k8cHbyYh33bI2hQ_-1Kyg4J7HA",
  authDomain: "inventory-management-ce34c.firebaseapp.com",
  projectId: "inventory-management-ce34c",
  storageBucket: "inventory-management-ce34c.appspot.com",
  messagingSenderId: "1010424521316",
  appId: "1:1010424521316:web:92e58910becbb7c5ddb571",
  measurementId: "G-HWM8YJXFEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export{firestore}