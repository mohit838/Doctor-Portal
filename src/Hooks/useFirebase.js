import initializedFirebase from "../pages/Login/Firebase/Firebase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

//Initailized Firebase Auth
initializedFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();

  //LogIn User Using Email
  const createNewUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        // const user = userCredential.user;

        // To Clear AuthError
        setAuthError("");
      })
      .catch((error) => {
        // const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //SignIn User
  const signIn = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        // const user = userCredential.user;

        //For Location and  Navigate
        const destination = location?.state?.from || "/";
        navigate(destination);

        // To Clear AuthError
        setAuthError("");
      })
      .catch((error) => {
        // const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //Monitoring User For Various Browser
  useEffect(() => {
    const unSubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    isLoading,
    createNewUser,
    authError,
    signIn,
    logOut,
  };
};

export default useFirebase;
