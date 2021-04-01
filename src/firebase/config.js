import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA_D4NMV0tON6iLzXFHZsFxwvjmiiOtvds",
  authDomain: "sorteo-hnk.firebaseapp.com",
  projectId: "sorteo-hnk",
  storageBucket: "sorteo-hnk.appspot.com",
  messagingSenderId: "275338188701",
  appId: "1:275338188701:web:ac301184829b8859f50174",
  measurementId: "G-8BX3E1Z3F6"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();