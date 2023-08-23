import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAslduMUfzKfKYjgo-aqdfHCHtPiY7yTD8",
  authDomain: "mocachan-72c31.firebaseapp.com",
  projectId: "mocachan-72c31",
  storageBucket: "mocachan-72c31.appspot.com",
  messagingSenderId: "725726076717",
  appId: "1:725726076717:web:5e11f943ef61baa30ffda4"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
