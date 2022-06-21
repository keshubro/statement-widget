import React, { useRef, useState } from "react";
import CardComponent from "./CardComponent";
import { InputField } from "./generic/InputField";
import { useNavigate } from "react-router-dom";
import { GetJWT, GetLoggedinUser, SetJWT, SetLoggedinUser } from '../contexts/AuthContext';
import axios from 'axios';
import { BiError } from 'react-icons/bi';

export const LoginComponent: React.FC = () => {
    const navigate = useNavigate();

    // States
    const [isError, setIsError] = useState<boolean>(false);

    const setJwt = SetJWT();

    // Refs
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


    const setUser = SetLoggedinUser();

    function _handleLogin() {
        setIsError(false)
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const body = {
            username: email,
            password
        }

        axios.post('http://localhost:3000/auth/login', body)
            .then((res) => {
                console.log(res.data);
                setJwt(res.data.token);
                setUser(body);
                navigate('/statements');
                setIsError(false);
            })
            .catch(() => {
                setIsError(true);
            });
    }

    function _handleFieldChange() {

    }

    return (
        <CardComponent>

            <div className="mx-4 my-4">
                <form>
                    <div className="col-span-1">
                        <a href="#">
                            <span className="font-bold text-4xl text-green-600">Buck</span>
                            <span className="text-2xl text-gray-500 font-bold">sort</span>
                        </a>
                    </div>
                    <div className="font-bold text-lg mt-4">Login</div>


                    <div className="mt-3">
                        <InputField sendRef={emailRef} inputType="email" placeholder="Email" handleValueChange={() => { setIsError(false) }} />
                    </div>
                    <div className="mt-3">
                        <InputField sendRef={passwordRef} placeholder="Password" inputType="password" handleValueChange={() => { setIsError(false) }} />
                    </div>

                    <div className="mt-4">

                        {isError && <div className="mt-5 mb-5 flex align-items-center p-1 w-1/2 border rounded border-red-500">
                            <p className="text-base text-red-600 flex justify-center items-center font-bold"><BiError className="text-lg font-bold mr-3" />Incorrect email or password !</p>
                        </div>}

                        <button type="submit" onClick={() => _handleLogin()} className="px-2 py-1 text-base rounded bg-green-400 text-gray-700 font-bold hover:text-gray-600 border border-green-600 focus:border-green-500 shadow outline-none">
                            Login
                        </button>



                    </div>
                </form>

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
