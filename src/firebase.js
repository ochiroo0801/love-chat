import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDl4utitbBmbdaH3tv7DLSR0o5SZVu8W_Y",
  authDomain: "love-chat-2.firebaseapp.com",
  databaseURL: "https://love-chat-2.firebaseio.com",
  projectId: "love-chat-2",
  storageBucket: "love-chat-2.appspot.com",
  messagingSenderId: "51818166090",
  appId: "1:51818166090:web:88b6dfeaab68ef32d733b3",
  measurementId: "G-NXN8Y58GPY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
