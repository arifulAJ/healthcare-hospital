import React, { createContext } from 'react';
import useFireBase from '../pages/Firebase/FirebaseAuth';
export const AuthContext=createContext();
const AughtProvider = ({ children}) => {
    const allContent=useFireBase();
    return (
        <AuthContext.Provider value={allContent}>
            {children}
        </AuthContext.Provider>
    );
};

export default AughtProvider;