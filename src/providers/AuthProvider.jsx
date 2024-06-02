import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";




export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
   
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const axiosPublic = useAxiosPublic();

    // social provider
   const googleProvider = new GoogleAuthProvider();

  // create Account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
 // googleLogin
 const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name,photo) =>{
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
    })
    
   }

   useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        // console.log('current user',currentUser);
        if(currentUser){
      //  get token
      const userInfo = {email : currentUser.email}
      axiosPublic.post('/jwt',userInfo)
            .then(res => {
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                    setLoading(false);
                }
            })
        }else{
      // do some things  
      localStorage.removeItem('access-token');
      setLoading(false);
        }
        setLoading(false);
    });
    return () => {
        return unSubscribe();
    }
   },[axiosPublic, reload])




    const authInfo = {
        user,
        createUser,
        signIn,
        googleLogin,
        logOut,
        loading,
         setLoading,
         updateUserProfile,
         setReload

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;