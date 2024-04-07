// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA6ecgJAN-7ii88XCo1TaSuozj8ZHQpbo",
  authDomain: "fir-module51-project.firebaseapp.com",
  projectId: "fir-module51-project",
  storageBucket: "fir-module51-project.appspot.com",
  messagingSenderId: "736279717260",
  appId: "1:736279717260:web:73a70c191f7ac5b9d9e2a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)