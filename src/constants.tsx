import { AccountObject, DocumentObject } from "./interfaces/AccountObjectInterface";

export const documentTypes: Array<DocumentObject> = [
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
];

export const accounts: Array<AccountObject> = [
    {
      id: "1",
      accountHolder: "Keshav Sharma",
      accountNumber: "1234567890",
    },
    {
      id: "2",
      accountHolder: "Madhav Sharma",
      accountNumber: "32345454663",
      accountBalance: "1456",
    },
];

export const FILTER_OPTIONS = {
    INVSTMT: ['MOST_RECENT', 'SEQUENCE_NUMBER', 'DATE_RANGE'],
    QRTSTMT: ['MOST_RECENT', 'QUARTER_NUMBER', 'DATE_RANGE'],
    INCRPT: ['DATE_RANGE']
};