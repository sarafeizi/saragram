import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAhaSjJovfV2TkhcP5EfXKjKDh-luFwQY4",
  authDomain: "saragram-42729.firebaseapp.com",
  projectId: "saragram-42729",
  storageBucket: "saragram-42729.appspot.com",
  messagingSenderId: "431548223580",
  appId: "1:431548223580:web:7c90831702397246a4d699"
}).auth();