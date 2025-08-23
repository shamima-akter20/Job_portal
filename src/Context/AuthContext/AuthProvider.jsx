import React, { useEffect, useState } from 'react'
import auth from '../../Firebase/firebase.init'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import AuthContext from './AuthContext'
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // --------------------  sign in -----------------
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // ------------------- sign in -------------------
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // ----------------- google signin ---------------
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // ------------------  sign out  -----------------
  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('state captured', currentUser)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignIn,
    signOutUser,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
