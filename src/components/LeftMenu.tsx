import React from 'react';
import { AiOutlineAlignCenter } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

export const LeftMenu: React.FC = () => {
    const items = [
        {
            icon: <AiOutlineAlignCenter />,
            title: 'Overview'
        },
        {
            icon: <MdOutlineProductionQuantityLimits />,
            title: 'Products'
        },
        {
            icon: <BsPerson />,
            title: 'Profile'
        }
    ]
    return (
        <div className="h-full min-h-screen w-full bg-gray-200 py-4">
            {items.map((item) => {
                return (
                   
                    <div className="hover:cursor-pointer flex items-center border-b px-3 border-green-700 pb-3 mb-3">
                        <span className="text-2xl font-bold text-green-600">{item.icon}</span>
                        <span className="ml-3 text-base font-bold text-green-700">{item.title}</span>
                    </div>
                  
                    
                )
            })}
        </div>
    )
}
