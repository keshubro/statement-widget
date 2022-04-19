import React, { useContext, useState } from 'react';

const AuthGetter = React.createContext<object | null>(null);
const AuthSetter = React.createContext<(user: object | null) => void>((user: object | null) => {});

// Custom hook
export function GetLoggedinUser() {
    return useContext(AuthGetter);
}

// Custom hook
export function SetLoggedinUser() {
    return useContext(AuthSetter);
}

export const AuthContext: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

    const [loggedinUser, setLoggedinUser] = useState<object | null>(null);

    function handleLoggedinUserChange(user: object | null) {
        setLoggedinUser(user);
    }

    return (
        <AuthGetter.Provider value={loggedinUser}>
            <AuthSetter.Provider value={handleLoggedinUserChange}>
                {children}
            </AuthSetter.Provider>
        </AuthGetter.Provider>
    )
}
