import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "onlineclothing-db.firebaseapp.com",
  projectId: "onlineclothing-db",
  storageBucket: "onlineclothing-db.appspot.com",
  messagingSenderId: "318336052105",
  appId: "1:318336052105:web:0519e512e4de7a3f11cf58",
  measurementId: "G-ZP2J0SKXHV",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error("error creating user", err.message);
    }
  }

  return userRef;
};
//if already initialized
if (!firebase.apps.length) firebase.initializeApp(config);
else firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
