import axios from "axios";
import React, { useState, useEffect } from "react";
import { accounts } from "../constants";
import { GetJWT } from "../contexts/AuthContext";
import { GetDocumentType } from "../contexts/DocumentTypeContext";
import { GetSelectedFilter } from "../contexts/SelectedFilterContext";
import { GetShowDocumentsListValue, SetShowDocumentsListValue } from "../contexts/ShowDocumentsListContext";
import { AccountObject, DocumentObject, ExpandableItemProps, ItemObject } from "../interfaces/AccountObjectInterface";
import { host } from "../utils/constants";
import AccountSelector from "./AccountSelector";
import CardComponent from "./CardComponent";
import { DocumentListComponent } from "./DocumentListComponent";
import DocumentSelectComponent from "./DocumentSelectComponent";
import FilterComponent from "./FilterComponent";
import { OptionalFieldsComponent } from "./OptionalFieldsComponent";

export const MainComponent: React.FC = () => {

    // Get context values
    const selectedFilter = GetSelectedFilter();
    const getJwt = GetJWT();
    const selectedDocType = GetDocumentType();
    const getShowDocumentsListValue = GetShowDocumentsListValue();
    const setShowDocumentsListValue = SetShowDocumentsListValue();

    const [documentList, setDocumentList] = useState<ExpandableItemProps[]>([{ title: '' }]);
    const [accounts, setAccounts] = useState<AccountObject[]>([]);
    const [documentTypes, setDocumentTypes] = useState<DocumentObject[]>([{ documentTypeLabel: '', documentTypeNumber: '' }]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [sequenceNumber, setSequenceNumber] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [quarter, setQuarter] = useState<string>('');

    const arr = [
        {
            title: 'Investment Statement Document 1',
            details: [
                {
                    label: 'Account holder',
                    value: 'Madhav Sharma'
                },
                {
                    label: 'Date of receipt',
                    value: '2022'
                }
            ]
        },
        {
            title: 'Investment Statement Document 2',
            details: [
                {
                    label: 'Account holder',
                    value: 'Garima Sharma'
                },
                {
                    label: 'Date of receipt',
                    value: '2018'
                }
            ]
        },
        {
            title: 'Investment Statement Document 3',
            details: [
                {
                    label: 'Account holder',
                    value: 'Saloni Sharma'
                },
                {
                    label: 'Date of receipt',
                    value: '2002'
                }
            ]
        }
    ]

    useEffect(() => {
        async function getAccountsAndDocumentTypes() {
            const accounts = await getAccounts();
            const documentTypes = await getDocumentTypes();
            setAccounts(accounts);
            setDocumentTypes(documentTypes)
            // setDocumentList(arr);
            setLoaded(true);
        }

        getAccountsAndDocumentTypes();
        
        return () => {}
    }, []);

    function getAccounts() {
        return fetch('http://localhost:3000/accounts')
            .then(res => res.json());
    }

    function getDocumentTypes() {
        return fetch('http://localhost:3000/documentTypes')
            .then(res => res.json());
    }

    function _getQueryParams() {
        let options = ''
        switch(selectedFilter) {
            case 'MOST_RECENT':
                options = `?filter=MOST_RECENT`;
                break;
            case 'SEQUENCE_NUMBER':
                options = `?filter=SEQUENCE_NUMBER&sequenceNumber=${sequenceNumber}&year=${year}`;
                break;
            case 'DATE_RANGE':
                options = `?filter=DATE_RANGE`;
                break;
            case 'QUARTER_NUMBER':
                options = `?filter=QUARTER&quarter=${quarter}&year=${year}`
                break;
            default:
        }

        return options;
    }

    function _handleDownloadClick() {
        const config = {
            headers: {
                Authorization: `Bearer ${getJwt}`
            }
        }
        setShowDocumentsListValue(false);
        const queryParams = _getQueryParams();
        const docTypeEndpoint = _getDocTypeEndpoint();
        axios.get(`${host}/${docTypeEndpoint}${queryParams}`, config)
            .then((res) => res.data)
            .then((res) => {
                setDocumentList(res);
                setShowDocumentsListValue(true);
            })
        
    }

    function _getDocTypeEndpoint() {
        switch(selectedDocType) {
            case 'INVSTMT':
                return 'investmentStatements';
            case 'QRTSTMT':
                return 'quarterlyStatements'
            case 'INCRPT':
                return 'incidentReports'
            default:
                return '';
        }
    }

    function _handleOptionalFieldsValueChange(paramsObj) {
        const { year, sequenceNumber, quarterNumber } = paramsObj;
        if(sequenceNumber) {
            setSequenceNumber(sequenceNumber);
        }
        if(year) {
            setYear(year);
        }
        if(quarterNumber) {
            setQuarter(quarterNumber);
        }
        
    }

    return (
        <>
            {
                loaded &&
                <>
                    <div className="text-2xl mb-5 font-semibold">
                        Download Statements and Overview
                    </div>
                    <div className="mb-10">
                        <AccountSelector accounts={accounts} />
                    </div>
                    <div className="mb-2 max-w-2xl">
                        <CardComponent>
                            <div className="m-4">
                                <div className="mb-4">
                                    <DocumentSelectComponent documentTypes={documentTypes} />
                                </div>
                                <div className="mb-6">
                                    <FilterComponent />
                                </div>
                                {selectedFilter !== "MOST_RECENT" && (
                                    <div className="mb-4">
                                        <OptionalFieldsComponent handleOptionalFieldsValueChange={_handleOptionalFieldsValueChange} selectedFilter={selectedFilter} />
                                    </div>
                                )}
                                <div>
                                    <button onClick={_handleDownloadClick} className="px-2 py-1 text-base rounded bg-green-400 text-gray-700 font-bold hover:text-gray-600 border border-green-600 focus:border-green-500 shadow outline-none">
                                        Search Documents
                                    </button>
                                </div>
                                {getShowDocumentsListValue && <div className="mt-4"><DocumentListComponent documentList={documentList} /></div>}
                            </div>
                        </CardComponent>
                    </div>
                </>
            }

        </>
    );
};
