import React from 'react'
import CardComponent from './CardComponent'
import { InputField } from './generic/InputField';
import { useNavigate } from "react-router-dom";

export const SignupComponent = () => {
    const navigate = useNavigate();

    return (
        <CardComponent>
      <div className="mx-4 my-4">
        <div className="col-span-1">
          <a href="#">
            <span className="font-bold text-4xl text-green-600">Buck</span>
            <span className="text-2xl text-gray-500 font-bold">sort</span>
          </a>
        </div>
        <div className="font-bold text-lg mt-4">Create an account</div>
        <div className="mt-3">
          <InputField inputType="text" placeholder="First Name" />
        </div>
        <div className="mt-3">
          <InputField inputType="text" placeholder="Last Name" />
        </div>
        <div className="mt-3">
          <InputField inputType="email" placeholder="Email" />
        </div>
        <div className="mt-3">
          <InputField placeholder="Password" inputType="password" />
        </div>

        <div className="mt-5">
          <button className="px-2 py-1 text-base rounded bg-green-400 text-gray-700 font-bold hover:text-gray-600 border border-green-600 focus:border-green-500 shadow outline-none">
            Register
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <span className="text-base font-bold">Already have an account ?</span>
        </div>

        <div className="mt-2 flex justify-center">
          <button onClick={() => navigate('/')} className="text-lg px-3 py-1 border-2 rounded border-black">
            Login
          </button>
        </div>
      </div>
    </CardComponent>
    )
}
