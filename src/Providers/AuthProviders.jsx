
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const user = null;
    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;