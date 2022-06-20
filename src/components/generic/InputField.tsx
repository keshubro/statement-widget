import React from 'react';
import { InputFieldProps } from '../../interfaces/AccountObjectInterface';

export const InputField: React.FC<InputFieldProps> = (props) => {
    return (
        <input onChange={props.handleValueChange} ref={props?.sendRef} placeholder={props?.placeholder} type={props.inputType || 'text'} className="w-full px-2 py-2 text-slate-600 relative bg-white rounded text-sm border border-black focus:border-green-500 shadow outline-none" />
    )
}
