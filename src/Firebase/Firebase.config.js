// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
const firebaseConfig = {
  apiKey: "AIzaSyBwDL20dEndR1KiRztLG8MSGJSg28ZMcNg",
  authDomain: "laptopresell-986f9.firebaseapp.com",
  projectId: "laptopresell-986f9",
  storageBucket: "laptopresell-986f9.appspot.com",
  messagingSenderId: "545346073153",
  appId: "1:545346073153:web:33f3aeea5ef0bf1a928cc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;