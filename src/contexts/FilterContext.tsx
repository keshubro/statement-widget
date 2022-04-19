import React, { useContext, useState } from 'react';
import { FILTER_OPTIONS } from '../constants';

const FilterGetter = React.createContext<string[]>([]);
const FilterSetter = React.createContext<{(val:keyof typeof FILTER_OPTIONS) : void}>(() => {});


// Custom hook
export function GetFilter() {
    return useContext(FilterGetter);
}

// Custom hook
export function SetFilter() {
    return useContext(FilterSetter);
}



export const FilterContext: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

    const [filterArray, setFilterArray] = useState<string[]>(FILTER_OPTIONS['INVSTMT']);

    const handleFilterChange = (newDocType: keyof typeof FILTER_OPTIONS):void => {
        setFilterArray(FILTER_OPTIONS[newDocType]);
    }
    
    return (
        <FilterGetter.Provider value={filterArray}>
            <FilterSetter.Provider value={handleFilterChange}>
                {children}
            </FilterSetter.Provider>
        </FilterGetter.Provider>
    )
}
