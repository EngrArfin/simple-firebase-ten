// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgqc2HxMmeVaEyvp6yRJfrrwOLrLUjx3c",
  authDomain: "simple-firebase-ten.firebaseapp.com",
  projectId: "simple-firebase-ten",
  storageBucket: "simple-firebase-ten.appspot.com",
  messagingSenderId: "430100823677",
  appId: "1:430100823677:web:c50c3e3afe5cf68a01fb14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;