import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDKywl47ZL00ngUfKyYH0s5J0pFAcYFbyA",
    authDomain: "line-clone-80489.firebaseapp.com",
    projectId: "line-clone-80489",
    storageBucket: "line-clone-80489.appspot.com",
    messagingSenderId: "979065319513",
    appId: "1:979065319513:web:a502d90ede91d5d55b8148"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };