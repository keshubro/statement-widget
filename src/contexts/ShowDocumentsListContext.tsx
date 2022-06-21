import React, { useState, useContext } from "react";

const ShowDocumentsListGetter = React.createContext<boolean>(false);
const ShowDocumentsListSetter = React.createContext<{(val:boolean): void}>(() => {})

// Custom hook
export function GetShowDocumentsListValue() {
    return useContext(ShowDocumentsListGetter);
}

// Custom hook
export function SetShowDocumentsListValue() {
    return useContext(ShowDocumentsListSetter);
}

export const ShowDocumentListContext: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [showDocumentsList, setShowDocumentsList] = useState<boolean>(false);

    const handleShowDocumentsListValueChange = (newVal: boolean) => {
        setShowDocumentsList(newVal);
    }

    return (
        <ShowDocumentsListGetter.Provider value={showDocumentsList}>
            <ShowDocumentsListSetter.Provider value={handleShowDocumentsListValueChange}>
                {children}
            </ShowDocumentsListSetter.Provider>
        </ShowDocumentsListGetter.Provider>
    )
}