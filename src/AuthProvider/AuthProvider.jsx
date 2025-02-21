/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const logoutUSer = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    loginWithGoogle,
    user,
    loading,
    logoutUSer
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
