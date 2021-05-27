import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA_QPasZFNI1c5uMlKhMXKvoOstsBBTugY",
  authDomain: "wiggly-wag.firebaseapp.com",
  projectId: "wiggly-wag",
  storageBucket: "wiggly-wag.appspot.com",
  messagingSenderId: "645941168171",
  appId: "1:645941168171:web:470d46e7c28fe76ff4426e",
  measurementId: "G-5KTFHEMVJ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;