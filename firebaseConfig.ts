// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDQiuwQgXSn5d2wjfcTS1B4uxygAJgZXtk",
  authDomain: "expopushnotification-22428.firebaseapp.com",
  projectId: "expopushnotification-22428",
  storageBucket: "expopushnotification-22428.firebasestorage.app",
  messagingSenderId: "995935729729",
  appId: "1:995935729729:web:e38927ade7f7b3055eaec0",
  measurementId: "G-GNXRTELE09"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


