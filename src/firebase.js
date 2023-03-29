// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAJXRzTD8Hn2pe-3OfznR_S2HaU1EK7624",
  authDomain: "ecommerce-website-31301.firebaseapp.com",
  projectId: "ecommerce-website-31301",
  storageBucket: "ecommerce-website-31301.appspot.com",
  messagingSenderId: "559574263246",
  appId: "1:559574263246:web:340271d3 fd9ab7e6e9379f",
  measurementId: "G-9LPXGTH3MF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export{app,auth};