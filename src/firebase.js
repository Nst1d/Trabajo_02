// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNogBjtrPh67bAaI1SvsT52CEbiF-6JgI",
  authDomain: "ecofood-app-b41d8.firebaseapp.com",
  projectId: "ecofood-app-b41d8",
  storageBucket: "ecofood-app-b41d8.firebasestorage.app",
  messagingSenderId: "849318394935",
  appId: "1:849318394935:web:9f658614fce049685b93b2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
