// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwyOGH-OY9iQ0LDaxz89kvOkhZDuDVFDQ",
  authDomain: "astro-authentication-f49b0.firebaseapp.com",
  projectId: "astro-authentication-f49b0",
  storageBucket: "astro-authentication-f49b0.firebasestorage.app",
  messagingSenderId: "961719725963",
  appId: "1:961719725963:web:3d1f8e4d2d7a61c4d8c98e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "es";

export const firebase = {
  app,
  auth,
};
