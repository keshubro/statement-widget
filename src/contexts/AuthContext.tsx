import React, { useContext, useState } from 'react';

const AuthGetter = React.createContext<object | null>(null);
const AuthSetter = React.createContext<(user: object | null) => void>((user: object | null) => {});

const JWTGetter = React.createContext('');
const JWTSetter = React.createContext((jwt:string) => {});

// Custom hook
export function GetLoggedinUser() {
    return useContext(AuthGetter);
}

// Custom hook
export function SetLoggedinUser() {
    return useContext(AuthSetter);
}

// Custom hook
export function GetJWT() {
    return useContext(JWTGetter)
}

// Custom Hook
export function SetJWT() {
    return useContext(JWTSetter);
}

export const AuthContext: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

    const [loggedinUser, setLoggedinUser] = useState<object | null>(null);
    const [JWT, setJWT] = useState<string>('');

    function handleLoggedinUserChange(user: object | null) {
        setLoggedinUser(user);
    }

    function handleJWTChange(jwt:string) {
        setJWT(jwt);
    }

    return (
        <AuthGetter.Provider value={loggedinUser}>
            <AuthSetter.Provider value={handleLoggedinUserChange}>
                <JWTGetter.Provider value={JWT}>
                    <JWTSetter.Provider value={handleJWTChange}>
                        {children}
                </JWTSetter.Provider>
                </JWTGetter.Provider>
            </AuthSetter.Provider>
        </AuthGetter.Provider>
    )
}
