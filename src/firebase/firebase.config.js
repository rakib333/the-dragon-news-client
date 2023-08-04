// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq7G0QoHWHEuiR222MbLzbuWCBzCmklKw",
    authDomain: "the-dragon-news-client-9d84d.firebaseapp.com",
    projectId: "the-dragon-news-client-9d84d",
    storageBucket: "the-dragon-news-client-9d84d.appspot.com",
    messagingSenderId: "444091618992",
    appId: "1:444091618992:web:de6ffb94b176388fdd4d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;