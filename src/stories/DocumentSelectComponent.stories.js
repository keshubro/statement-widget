import DocumentSelectComponent from '../components/DocumentSelectComponent';

export default {
    title: 'DocumentSelectComponent',
    component: DocumentSelectComponent
}

const documentTypes = [
    {
        documentTypeLabel: 'Investment Statements',
        documentTypeNumber: 'INVSTMT'
    },
    {
        documentTypeLabel: 'Quarterly Statements',
        documentTypeNumber: 'QRTSTMT'
    },
    {
        documentTypeLabel: 'Incident Reports',
        documentTypeNumber: 'INCRPT'
    }
]

export const DocumentTypes = () => <DocumentSelectComponent documentTypes={documentTypes} />