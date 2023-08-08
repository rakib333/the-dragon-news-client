
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (currentUser, name, photo) => {
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }




    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser?.emailVerified || currentUser === null) {
                setUser(currentUser)

            }
            // setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])







    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        userSignIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;