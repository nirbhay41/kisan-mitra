import firebase from 'firebase';
import "firebase/storage";
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY, 
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_AUTH_PROJECT_ID, 
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {auth,db,storage};