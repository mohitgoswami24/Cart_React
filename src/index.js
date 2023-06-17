import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRidkK3 vR2qEMYuYEjrWMFZUUV2QUXuCA",
  authDomain: "cart-bf311.firebaseapp.com",
  projectId: "cart-bf311",
  storageBucket: "cart-bf311.appspot.com",
  messagingSenderId: "778007130513",
  appId: "1:778007130513:web:c573b3eac9b4c86eb9aa30"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


