import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../../firebase/firebase.cofig";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from './../../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic()
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = ()=>{
    return signOut(auth)
  }

  const userUpdateProfile = (profile) =>{
    return updateProfile(auth.currentUser, profile)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('current user', currentUser)
      if(currentUser){
        const userInfo = {email: currentUser.email}
          axiosPublic.post('/jwt', userInfo)
          .then(res=>{
            if(res.data.token){
              localStorage.setItem('access-token', res.data.token)
            }
          })
      }else{
          localStorage.removeItem('access-token')
      }
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    setUser,
    loading,
    signInUser,
    createUser,
    signOutUser,
    signInWithGoogle,
    userUpdateProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
