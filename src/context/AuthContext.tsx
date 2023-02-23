import React, { createContext, useContext, useState } from "react";

type User = {
    user: string;
}

export const AuthContext = createContext<User|null>(null);

export const AuthProvider = ({children}:{children : React.ReactNode}) => {

    const [user, setUser] = useState("");

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext);
}