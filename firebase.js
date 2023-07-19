
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVMTQB_WVNYczIzt2G7nAqYU2B9UGwEc0",
  authDomain: "laundary-application-62569.firebaseapp.com",
  projectId: "laundary-application-62569",
  storageBucket: "laundary-application-62569.appspot.com",
  messagingSenderId: "39324478725",
  appId: "1:39324478725:web:3bdc33d73f975d846f9b6c"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};