import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBW8s3eyWIf942blrHOC3Stafxmo_DRmGI",
  authDomain: "prepwise-30d08.firebaseapp.com",
  projectId: "prepwise-30d08",
  // storageBucket: "prepwise-30d08.firebasestorage.app",
  storageBucket: "prepwise-30d08.appspot.com", // ✅
  messagingSenderId: "877525560194",
  appId: "1:877525560194:web:6a09e955ab9f10422b7d9b",
  measurementId: "G-F24M2XPKHM"
};

// Initialize Firebase
// const app = !getApp.length ? initializeApp(firebaseConfig) : getApp();
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);