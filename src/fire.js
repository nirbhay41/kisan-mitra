import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAf22hyYAlZRHQ38PHuG-a6x5e8sSgqwy8",
    authDomain: "kishan-mittre.firebaseapp.com",
    projectId: "kishan-mittre",
    storageBucket: "kishan-mittre.appspot.com",
    messagingSenderId: "518491024318",
    appId: "1:518491024318:web:ac2e53fdb1665bc13be7ef"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;