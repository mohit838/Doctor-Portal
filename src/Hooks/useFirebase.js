import initializedFirebase from "../pages/Login/Firebase/Firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//Initailized Firebase Auth
initializedFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  //LogIn User Using Email
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  //Monitoring User For Various Browser
  useEffect(() => {
    const unSubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unSubcribed;
  }, []);

  //SignOut User
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    createNewUser,
    logOut,
  };
};

export default useFirebase;
