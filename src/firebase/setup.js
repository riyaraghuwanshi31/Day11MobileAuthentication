
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPXf20dQIJUzTJq08gNXRuV9mmuu7FKfQ",
  authDomain: "registrationform-withauth.firebaseapp.com",
  projectId: "registrationform-withauth",
  storageBucket: "registrationform-withauth.appspot.com",
  messagingSenderId: "825354302080",
  appId: "1:825354302080:web:3ef03997fdd1cb59bb2c65"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)

