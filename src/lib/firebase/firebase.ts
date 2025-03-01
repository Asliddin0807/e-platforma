import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMxUOWsYvtHXAV4-unN-CRP1bNdaVkTog",
  authDomain: "webproger-32052.firebaseapp.com",
  databaseURL: "https://webproger-32052-default-rtdb.firebaseio.com",
  projectId: "webproger-32052",
  storageBucket: "webproger-32052.firebasestorage.app",
  messagingSenderId: "341710663493",
  appId: "1:341710663493:web:d42a2782da9e4979ac982c",
  measurementId: "G-2LM97J3ZD0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, addDoc };
