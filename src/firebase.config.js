import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBfr7lDzN9g3aaYKWJFNXBnz9fo5GGrdQ4",
    authDomain: "coriumph-d25a2.firebaseapp.com",
    databaseURL: "https://coriumph-d25a2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "coriumph-d25a2",
    storageBucket: "coriumph-d25a2.appspot.com",
    messagingSenderId: "661350053488",
    appId: "1:661350053488:web:a586494894899ebb9866b5",
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };