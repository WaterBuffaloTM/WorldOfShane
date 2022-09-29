import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDICIdZC31U_8vhxVpXMKXiL2PP15dXOW4",
    authDomain: "worldofshane-bca65.firebaseapp.com",
    databaseURL: "https://worldofshane-bca65-default-rtdb.firebaseio.com",
    projectId: "worldofshane-bca65",
    storageBucket: "worldofshane-bca65.appspot.com",
    messagingSenderId: "894302409537",
    appId: "1:894302409537:web:300c2711bf977e82e607c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db,getFirestore}