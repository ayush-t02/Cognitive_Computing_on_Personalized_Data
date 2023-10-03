import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {};
// Initialize Firebase

export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const db = app.firestore();
export const logout1 = () => {
  auth.signOut();
};
