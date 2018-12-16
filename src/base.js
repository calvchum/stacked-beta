import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBewNva1QfD1NCG5ekHFT7dOva8K8EBwZ8",
    authDomain: "stacked-8b627.firebaseapp.com",
    databaseURL: "https://stacked-8b627.firebaseio.com",
  });

const base = Rebase.createClass(firebaseApp.database());

// this is a named export

export { firebaseApp };

//this is the default export, main thing
export default base;
