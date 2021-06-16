import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCT1ziLORMPg31Ys2d80RwZwkKjkmuC1Zw",
  authDomain: "tropical-twist.firebaseapp.com",
  projectId: "tropical-twist",
  storageBucket: "tropical-twist.appspot.com",
  messagingSenderId: "215976699784",
  appId: "1:215976699784:web:95089ce064f5409b577c3d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
