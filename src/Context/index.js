import React,{createContext, useState} from 'react';

const AuthContext = createContext({});

export default function ContextProvider({children}){

    const [user,setUser] = useState(0);

    return (
        <AuthContext.Provider value={{isSigned: user && user}}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext};