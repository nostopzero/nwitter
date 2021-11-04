
// v9
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGfciN5VOkhIRd7QeW5dHwuSIlj_Ij4lY",
  authDomain: "nwitter-3810d.firebaseapp.com",
  projectId: "nwitter-3810d",
  storageBucket: "nwitter-3810d.appspot.com",
  messagingSenderId: "850863385804",
  appId: "1:850863385804:web:c18a516b0723f8027d6669"
};

const app = initializeApp(firebaseConfig);

export const authService = getAuth(app);


// v8
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGfciN5VOkhIRd7QeW5dHwuSIlj_Ij4lY",
  authDomain: "nwitter-3810d.firebaseapp.com",
  projectId: "nwitter-3810d",
  storageBucket: "nwitter-3810d.appspot.com",
  messagingSenderId: "850863385804",
  appId: "1:850863385804:web:c18a516b0723f8027d6669"
};

export default firebase.initializeApp(firebaseConfig);