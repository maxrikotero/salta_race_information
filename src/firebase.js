import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC6tYmibkSXdvKcx5_p99DkmXmycEJ4uKM",
  authDomain: "salta-race-information.firebaseapp.com",
  projectId: "salta-race-information",
  storageBucket: "salta-race-information.appspot.com",
  messagingSenderId: "994215433470",
  appId: "1:994215433470:web:831212d0468118acc5c1af",
});

const db = getFirestore(firebaseApp);

export { db, getDocs, collection };
