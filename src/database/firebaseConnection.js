import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyCNzwCEomVpHYxQZA-SuCU9lHY0ZT8IuNc",
  authDomain: "projectcrow-a49ea.firebaseapp.com",
  projectId: "projectcrow-a49ea",
  storageBucket: "projectcrow-a49ea.appspot.com",
  messagingSenderId: "763123881591",
  appId: "1:763123881591:web:ccfb9e5ab0fb823cf61872",
  measurementId: "G-73PTBY15XD"
};


  firebase.initializeApp(firebaseConfig);


export default firebase;