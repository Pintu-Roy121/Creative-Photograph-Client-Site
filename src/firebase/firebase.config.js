// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId

    // apiKey: "AIzaSyDvIaqagjrFDE5B_Ek4dZNhwYuRP-TCMuY",
    // authDomain: "creative-photograph.firebaseapp.com",
    // projectId: "creative-photograph",
    // storageBucket: "creative-photograph.appspot.com",
    // messagingSenderId: "895577165627",
    // appId: "1:895577165627:web:ca37f5fa07954e1c5d711e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;