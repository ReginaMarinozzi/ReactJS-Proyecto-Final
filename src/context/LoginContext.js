import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword,  signOut,  onAuthStateChanged,  GoogleAuthProvider,  signInWithPopup,
sendPasswordResetEmail } from "firebase/auth";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });
    return () => unsubuscribe();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}