import { initializeApp,} from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
   onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyAh9MRi49PA7AzNHa4mB98o3UiLbsFm1ao",
    authDomain: "rn-insta-prac.firebaseapp.com",
    projectId: "rn-insta-prac",
    storageBucket: "rn-insta-prac.appspot.com",
    messagingSenderId: "431395578936",
    appId: "1:431395578936:web:ee1c4f9bf4678c1e41b2cd"
  };
  const app = initializeApp(firebaseConfig)
  const auth = getAuth();
  const db = getFirestore();
  export default app
  export{auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, collection, addDoc, db, getDocs}
    