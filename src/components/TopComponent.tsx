import React from 'react';
import { BottomMenu } from './BottomMenu';
import { LeftMenu } from './LeftMenu';
import { MainComponent } from './MainComponent';

export const TopComponent = () => {
    
    return (
        <>
            <div className="grid grid-cols-4">
                <div className="col-span-1 sm:hidden lg:inline-block">
                <LeftMenu />
                </div>
                <div className="col-span-3 ml-20 mt-10">
                <MainComponent />
                </div>
            </div>
            <div className="fixed bottom-0 w-full lg:hidden">
                <BottomMenu />
            </div>
        </>
    )
}
