// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfoZIPlXW0H7msqIuacaerQ4hc8Q3RIpM",
  authDomain: "chat-app-b9d0a.firebaseapp.com",
  projectId: "chat-app-b9d0a",
  storageBucket: "chat-app-b9d0a.appspot.com",
  messagingSenderId: "378164012723",
  appId: "1:378164012723:web:681d4f306547a2f76a72c6",
  measurementId: "G-BS6G25JMZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);