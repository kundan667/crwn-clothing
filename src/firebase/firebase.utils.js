import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAEMN10f3OAC503etUcOZqo_u3AGKIJv0Q",
    authDomain: "crwn-clothing-1034a.firebaseapp.com",
    projectId: "crwn-clothing-1034a",
    storageBucket: "crwn-clothing-1034a.appspot.com",
    messagingSenderId: "154333527507",
    appId: "1:154333527507:web:f78a33f550ce6c55aa0326"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;