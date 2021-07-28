// import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "",
  authDomain: "crown-db-e4263.firebaseapp.com",
  databaseURL: "https://crown-db-e4263.firebaseio.com",
  projectId: "crown-db-e4263",
  storageBucket: "crown-db-e4263.appspot.com",
  messagingSenderId: "7255313719",
  appId: "1:7255313719:web:fe1de8593f9766b3ef5eb2",
});

export const auth = app.auth();

export default app;
