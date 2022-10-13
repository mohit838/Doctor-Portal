import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializedFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializedFirebase;
