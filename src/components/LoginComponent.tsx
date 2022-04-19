import React, { useRef } from "react";
import CardComponent from "./CardComponent";
import { InputField } from "./generic/InputField";
import { useNavigate } from "react-router-dom";
import { GetLoggedinUser, SetLoggedinUser } from '../contexts/AuthContext';

export const LoginComponent: React.FC = () => {
    const navigate = useNavigate();

    // Refs
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

   
    const setUser = SetLoggedinUser();

    function _handleLogin() {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        
        if(email === password) {
            const user = {
                id: '1',
                email: 'keshav@gmail.com',
                firstName: 'Keshav',
                lastName: 'Sharma'
            }
            
            setUser(user);
            navigate('/statements')
        }
    }

    return (
        <CardComponent>
        <div className="mx-4 my-4">
            <div className="col-span-1">
            <a href="#">
                <span className="font-bold text-4xl text-green-600">Buck</span>
                <span className="text-2xl text-gray-500 font-bold">sort</span>
            </a>
            </div>
            <div className="font-bold text-lg mt-4">Login</div>
            <div className="mt-3">
                <InputField sendRef={emailRef} inputType="email" placeholder="Email" />
            </div>
            <div className="mt-3">
                <InputField sendRef={passwordRef} placeholder="Password" inputType="password" />
            </div>

            <div className="mt-4">
            <button onClick={() => _handleLogin()} className="px-2 py-1 text-base rounded bg-green-400 text-gray-700 font-bold hover:text-gray-600 border border-green-600 focus:border-green-500 shadow outline-none">
                Login
            </button>
            </div>

            <div className="mt-4 flex justify-center">
            <span className="text-base font-bold">OR</span>
            </div>

            <div className="mt-2 flex justify-center">
            <button onClick={() => navigate('/signup')} className="text-lg px-3 py-2 border-2 rounded border-black">
                Create an account
            </button>
            </div>
        </div>
        </CardComponent>
    );
};
