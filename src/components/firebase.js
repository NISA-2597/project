import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGDGC99HucJ4_XBnidi8a_ahbSoBevEag",
    authDomain: "vezeza-aaaa5.firebaseapp.com",
    projectId: "vezeza-aaaa5",
    storageBucket: "vezeza-aaaa5.appspot.com",
    messagingSenderId: "218392857674",
    appId: "1:218392857674:web:caccb11acc88148aec6ab3"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };
  
  
