// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "astro-authentication-f49b0.firebaseapp.com",
  projectId: "astro-authentication-f49b0",
  storageBucket: "astro-authentication-f49b0.firebasestorage.app",
  messagingSenderId: "xxxx",
  appId: "1:xxx:web:xxx",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "es";

export const firebase = {
  app,
  auth,
};
