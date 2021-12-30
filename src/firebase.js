// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2sY5imVfWzBoSnhFfzYUiEcg7AaZlmII",
  authDomain: "itz-your-shop.firebaseapp.com",
  projectId: "itz-your-shop",
  storageBucket: "itz-your-shop.appspot.com",
  messagingSenderId: "874250770251",
  appId: "1:874250770251:web:d5720d9392eda1b4c3bace",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;