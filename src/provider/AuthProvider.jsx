import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [authLoading , setAuthLoading] = useState(true)
    
    


const googleLogin =()=>{
    setAuthLoading(true)
    return signInWithPopup(auth, googleProvider)
}
const EmailPassLogin =(email , password)=>{
    setAuthLoading(true)
    return signInWithEmailAndPassword(auth, email , password)
}
const createUser =( email , password)=>{
    setAuthLoading(true)
    return createUserWithEmailAndPassword(auth, email , password)
}

const logout = ()=>{
    return signOut(auth)
}

 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currenUser =>{
        setUser(currenUser)
        if(currenUser){
        
        }
            setAuthLoading(false)     
        
    
        return(()=>{
            setLoading(true)
            return unsubscribe
        })
     })
 },[])    
 const authInfo = {
        user,
        googleLogin, 
        EmailPassLogin,
        createUser,
        logout,
        authLoading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;