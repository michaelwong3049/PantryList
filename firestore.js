// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg7bAcXor45XEa-RvWzGJOpoVaaFargrs",
  authDomain: "pantry-tracker-app-8c26d.firebaseapp.com",
  projectId: "pantry-tracker-app-8c26d",
  storageBucket: "pantry-tracker-app-8c26d.appspot.com",
  messagingSenderId: "419117854217",
  appId: "1:419117854217:web:9542f9effc2fa7512a52d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db