import React, { useState, useEffect } from "react";
import { accounts, documentTypes } from "../constants";
import { GetSelectedFilter } from "../contexts/SelectedFilterContext";
import { ExpandableItemProps, ItemObject } from "../interfaces/AccountObjectInterface";
import AccountSelector from "./AccountSelector";
import CardComponent from "./CardComponent";
import { DocumentListComponent } from "./DocumentListComponent";
import DocumentSelectComponent from "./DocumentSelectComponent";
import FilterComponent from "./FilterComponent";
import { OptionalFieldsComponent } from "./OptionalFieldsComponent";

export const MainComponent: React.FC = () => {
  const selectedFilter = GetSelectedFilter();

  const [showDocumentList, setShowDocumentList] = useState<boolean>(false);
  const [documentList, setDocumentList] = useState<ExpandableItemProps[]>([{title: ''}]);

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
      setDocumentList(arr)
      return () => {
          
      }
  }, [])

  function _handleDownloadClick() {
    setShowDocumentList(!showDocumentList);
  }

  return (
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
                <OptionalFieldsComponent selectedFilter={selectedFilter} />
              </div>
            )}
            <div>
              <button onClick={_handleDownloadClick} className="px-2 py-1 text-base rounded bg-green-400 text-gray-700 font-bold hover:text-gray-600 border border-green-600 focus:border-green-500 shadow outline-none">
                Search Documents
              </button>
            </div>
            {showDocumentList && <div className="mt-4"><DocumentListComponent documentList={documentList}/></div>}
          </div>
        </CardComponent>
      </div>
    </>
  );
};
