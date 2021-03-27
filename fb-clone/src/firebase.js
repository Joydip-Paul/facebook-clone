import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDRAuvlw6sgpuLgNDkUHWeNQ9vRKpWze6g",
    authDomain: "facebook-clone-1dbc8.firebaseapp.com",
    projectId: "facebook-clone-1dbc8",
    storageBucket: "facebook-clone-1dbc8.appspot.com",
    messagingSenderId: "101433870740",
    appId: "1:101433870740:web:40b6dbcba1839cdfade781",
    measurementId: "G-3LRSM6WTJR"
});

const auth = firebase.auth();
export {auth};