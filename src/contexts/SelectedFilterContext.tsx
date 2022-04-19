import React, { useContext, useState } from 'react'

const SelectedFilterGetter = React.createContext<string>('');
const SelectedFilterSetter = React.createContext<{(val:string) : void}>(() => {});

// Custom hook
export function GetSelectedFilter() {
    return useContext(SelectedFilterGetter);
}

// Custom hook
export function SetSelectedFilter() {
    return useContext(SelectedFilterSetter);
}

export const SelectedFilterContext: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

    const [selectedFilter, setSelectedFilter] = useState<string>('MOST_RECENT');

    const handleSelectedFilterChange = (newFilter:string) => {
        setSelectedFilter(newFilter);
    }

    return (
        <SelectedFilterGetter.Provider value={selectedFilter}>
            <SelectedFilterSetter.Provider value={handleSelectedFilterChange}>
                {children}
            </SelectedFilterSetter.Provider>
        </SelectedFilterGetter.Provider>
    )
}
