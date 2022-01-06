import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCPfnyxMscVlGY9fWF0w8nhv0lsfYkpbbQ",
  authDomain: "todo-auth-f5682.firebaseapp.com",
  projectId: "todo-auth-f5682",
  storageBucket: "todo-auth-f5682.appspot.com",
  messagingSenderId: "366727254771",
  appId: "1:366727254771:web:c569c98aaaa7a624911d86",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
