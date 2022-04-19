import React, { useContext, useState } from 'react';

const DocumentTypeGetter = React.createContext<string>('INVSTMT');
const DocumentTypeSetter = React.createContext<{(val:string) : void}>(() => {});

// Custom Hook
export function GetDocumentType() {
    return useContext(DocumentTypeGetter);
}

// Custom Hook
export const SetDocumentType = () => {
    return useContext(DocumentTypeSetter);
}

export const DocumentTypeContext: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

    const [selectedDocumentType, setSelectedDocumentType] = useState<string>('INVSTMT');

    function handleDocumentTypeChange(newDocType:string) {
        setSelectedDocumentType(newDocType);
    }


    return (
        <DocumentTypeGetter.Provider value={selectedDocumentType}>
            <DocumentTypeSetter.Provider value={handleDocumentTypeChange}>
                {children}
            </DocumentTypeSetter.Provider>
        </DocumentTypeGetter.Provider>
    )
}
