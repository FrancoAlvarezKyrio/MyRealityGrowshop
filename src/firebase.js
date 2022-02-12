import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCzyNy2ME6osXdx6NSEwvQhKdsjKQ16FEM",
  authDomain: "myrealitygrow.firebaseapp.com",
  projectId: "myrealitygrow",
  storageBucket: "myrealitygrow.appspot.com",
  messagingSenderId: "569757375391",
  appId: "1:569757375391:web:9fe521eba7c3f0d3517baa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
