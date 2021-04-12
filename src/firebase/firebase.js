import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyApTcXf8XhBQNruLz7Cb6Ip6a8QlLw-Aig",
    authDomain: "linkedin-clone-2bb83.firebaseapp.com",
    projectId: "linkedin-clone-2bb83",
    storageBucket: "linkedin-clone-2bb83.appspot.com",
    messagingSenderId: "64755846093",
    appId: "1:64755846093:web:cbe9d759f2b7c2ecfc9284"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}