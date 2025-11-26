// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7TMIAd5o4HJwehiUMUBEw6Kmt-bwUXT8",
  authDomain: "prepwise-4a852.firebaseapp.com",
  projectId: "prepwise-4a852",
  storageBucket: "prepwise-4a852.firebasestorage.app",
  messagingSenderId: "261220943154",
  appId: "1:261220943154:web:60ed43a76db93b83bf432b",
  measurementId: "G-RL95LS70H0"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
