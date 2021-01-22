import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/database';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCUDY_NMwtHRQw3cRQxyPmu4KhcdBPougc',
    authDomain: 'star-chat-36f19.firebaseapp.com',
    projectId: 'star-chat-36f19',
    storageBucket: 'star-chat-36f19.appspot.com',
    messagingSenderId: '203003703447',
    appId: '1:203003703447:web:d18655d4cb792cf19e79d2',
    measurementId: 'G-SZ0WCKDYJ7',
  });
}

export default firebase.firestore();
