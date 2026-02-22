import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
   apiKey: "AIzaSyBaxgusaoeP1RbpFCn50O2Hhrhz--CQmbw",
    authDomain: "campusconnect-aac19.firebaseapp.com",
    projectId: "campusconnect-aac19",
    storageBucket: "campusconnect-aac19.firebasestorage.app",
    messagingSenderId: "623964953510",
    appId: "1:623964953510:web:c848a3c7e3abd3b77c0d67"
};

 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);