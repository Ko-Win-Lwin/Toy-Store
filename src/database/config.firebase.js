import firebase from "firebase/app";
import "firebase/firestore"

// web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyApRdGoOKXL453s9UCgAQfkwbuggYEg9bk",
  
    authDomain: "toy-store-faec5.firebaseapp.com",
  
    projectId: "toy-store-faec5",
  
    storageBucket: "toy-store-faec5.appspot.com",
  
    messagingSenderId: "445946707484",
  
    appId: "1:445946707484:web:1a41ae0c062235cf15a9d9"
  
};


firebase.initializeApp(firebaseConfig)

let db = firebase.firestore();

export { db };

