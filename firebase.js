// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIARoHdOQaqlYbCsOMM49kwkMq9xt61j0",
  authDomain: "react-native-todo-app-1174c.firebaseapp.com",
  projectId: "react-native-todo-app-1174c",
  storageBucket: "react-native-todo-app-1174c.appspot.com",
  messagingSenderId: "855237575828",
  appId: "1:855237575828:web:cf286b7f8389e5959fa081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;