import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmAdkPkAFvS2ZBxkXOnLR_X0Wc9Prp1Xs',
  authDomain: 'sharedaily.firebaseapp.com',
  projectId: 'sharedaily',
  storageBucket: 'sharedaily.appspot.com',
  messagingSenderId: '753476014421',
  appId: '1:753476014421:web:fe21de74fdc4d954961fdc'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
