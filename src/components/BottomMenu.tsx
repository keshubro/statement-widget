import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineAlignCenter } from 'react-icons/ai';

export const BottomMenu = () => {
    return (
        <div className="sticky bottom-0 flex items-center border-t-2 bg-gray-300 w-full h-20 ">
            <div className="flex grid grid-cols-9 w-full">
                <div className="col-span-3 flex flex-col items-center justify-center">
                    <AiOutlineAlignCenter  className="text-3xl font-bold"/>
                    <span className="font-bold text-gray-600">Overview</span>
                </div>
                
                
                    <div className="col-span-3 flex flex-col items-center justify-center">
                        <MdOutlineProductionQuantityLimits className="text-3xl font-bold"/>
                        <span className="font-bold text-gray-600">Products</span>
                    </div>
                
                
                <div className="col-span-3 flex flex-col items-center justify-center">
                    <BsPerson className="text-3xl"/>
                    <span className="font-bold text-gray-600">Profile</span>
                </div>
            </div>
        </div>
    )
}
