// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFMXmjbTMWHDbVmWblA7A4vbbADTF-R3A",
  authDomain: "whatsapp-clone-73865.firebaseapp.com",
  projectId: "whatsapp-clone-73865",
  storageBucket: "whatsapp-clone-73865.appspot.com",
  messagingSenderId: "995922681279",
  appId: "1:995922681279:web:d4af1295d2706e3bdc150a",
  measurementId: "G-4SLZZR25Q4"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);