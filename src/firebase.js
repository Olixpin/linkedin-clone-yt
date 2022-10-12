import firebase from "firebase/compat/app"; //v9
import "firebase/compat/auth"; //v9
import "firebase/compat/firestore"; //v9

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL1FCp6LTYEWmpANfLHZpN8jqVePMsl-o",
  authDomain: "linkedin-clone-yt-548d7.firebaseapp.com",
  projectId: "linkedin-clone-yt-548d7",
  storageBucket: "linkedin-clone-yt-548d7.appspot.com",
  messagingSenderId: "669030051686",
  appId: "1:669030051686:web:6712d2bc8d5d069206a2a7",
  measurementId: "G-G4RTJPYLBV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
