import React, { useEffect } from "react";
import ".././index.css";
import { AccountObject } from "../interfaces/AccountObjectInterface";
import CardComponent from "./CardComponent";

interface Props {
    heading: string;
    accounts?: AccountObject[];
    selectedAccount: AccountObject;
    selectedAccountChanged: (newAccount: AccountObject | undefined) => void;
    closeModal: () => void;
    showFooter: boolean;
}

const MyModalComponent: React.FC<Props> = (props) => {

  const _accountSelected = (e: any): void => {
    const selectedAccount = props.accounts?.find((acc) => {
      return parseInt(acc.id, 10) === e?.target?.value;
    });
   
    e.target?.classList.add('selected-row');
    
    if (selectedAccount !== props.selectedAccount) {
      props.closeModal();
      props.selectedAccountChanged(selectedAccount);
    }
  }

  useEffect(() => {
        document?.getElementById('list')?.childNodes.forEach((li:any) => {
            if(li.value === parseInt(props.selectedAccount.id, 10)) { 
                li.classList.add('selected-row');
            }    
        })
      return () => {
        //   cleanup
      }
  }, [])

  return (
    <div className="bottom-0 border-t-2 rounded-t-xl border-green-500 border-t-4 h-1/3 left-0 w-full sm:h-min sm:border-none sm:rounded-xl sm:fixed sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 w-96 sm:fixed sm:bottom-0 sm:max-w-sm">
      <CardComponent>
        <div className="pb-2 border-b-2 grid grid-cols-10 text-y-center">
          <span className="text-2xl text-gray-800 font-bold col-span-9 pl-2 pr-2 text-center">
            {props.heading}
          </span>
          <span
            className="col-span-1 hover:cursor-pointer p-1 px-2 rounded hover:border-none hover:underline"
            onClick={() => {
              props.closeModal();
            }}
          >
            X
          </span>
        </div>

        <ul onClick={e => _accountSelected(e)} id="list">
          {props.accounts?.map((account) => {
              console.log(account)
            return (
              <li
                key={account.id}
                value={account.id}
                className="selected:bg-gray-200 hover:cursor-pointer hover:bg-green-200 p-2"
              >
                {account.accountHolder}
              </li>
            );
          })}
        </ul>

        {props.showFooter && (
          <div className="border-t-2 pt-3 text-right hidden sm:block">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-black mr-4 mb-2" onClick={() => props.closeModal()}>
              Close
            </button>
          </div>
        )}
      </CardComponent>
    </div>
  );
}

export default MyModalComponent;
