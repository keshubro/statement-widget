import React from 'react'
import { InputField } from './generic/InputField';
import { CgProfile } from 'react-icons/cg';
import { GetLoggedinUser, SetLoggedinUser } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const NavbarComponent = () => {
    const loggedinUser = GetLoggedinUser();
    const setUser = SetLoggedinUser();
    const navigate = useNavigate();

    function _handleLogout() {
        setUser(null);
        navigate('/')
    }

    return (
            <nav className="sticky top-0 bg-gray-800 py-auto px-4 py-4 h-20 border-b-2 border-black w-full">
                <div className="flex grid grid-cols-8 items-center">
                    <div className="col-span-1"><a href="#"><span className="font-bold text-4xl text-green-600">Buck</span><span className="text-2xl text-white font-bold">sort</span></a>
                    </div>
                    <div className="col-span-4 flex justify-center">
                        <input placeholder="Search" className="w-1/2 px-2 py-2 rounded bg-gray-600"/>
                    </div>
                    <div className="flex justify-center col-span-1">
                        <CgProfile className="text-4xl font-bold text-gray-300"/>
                    </div>
                    {loggedinUser === null && 
                        <>
                            <div className="flex justify-center col-span-1">
                                <button onClick={() => {navigate('/')}} className="mr-4 text-gray-300 font-bold px-3 py-1 border rounded hover:bg-gray-400 hover:text-gray-800">Login</button>
                            
                           
                                <button onClick={() => {navigate('/signup')}} className="px-2 py-1 text-base rounded bg-green-400 text-gray-700 font-bold hover:text-gray-600 border border-green-600 focus:border-green-500 shadow outline-none">Signup</button>
                            </div>
                        </>
                    }
                    {loggedinUser !== null && 
                        <div className="flex justify-center col-span-1">
                            <button onClick={() => _handleLogout()} className="text-gray-300 font-bold px-3 py-1 border rounded hover:bg-gray-400 hover:text-gray-800">Logout</button>
                        </div>
                    }           
                </div>
            </nav>
       
    )
}
