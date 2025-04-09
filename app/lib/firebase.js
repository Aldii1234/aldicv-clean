// Import dari Firebase SDK
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase kamu (sudah sesuai, tidak perlu diubah)
const firebaseConfig = {
  apiKey: "AIzaSyB1aSF7qIPMhXuk38xOfSaD4D96Qr2w6v0",
  authDomain: "statistikwebaldi.firebaseapp.com",
  projectId: "statistikwebaldi",
  storageBucket: "statistikwebaldi.firebasestorage.app",
  messagingSenderId: "932452395603",
  appId: "1:932452395603:web:49de3a9d3de5daa628b4a6",
  measurementId: "G-N3HN7NLMMP"
};

// Inisialisasi Firebase (hindari duplikat)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Ekspor Firestore instance
export const db = getFirestore(app);
