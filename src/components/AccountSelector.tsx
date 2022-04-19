import React, { useState, useEffect } from "react";
import ".././index.css";
import { AiOutlineRight } from "react-icons/ai";
import { FaAtlassian } from "react-icons/fa";
import { VscCircleFilled } from 'react-icons/vsc'
import CardComponent from "./CardComponent";
import MyModalComponent from "./MyModalComponent";
import { AccountObject } from "../interfaces/AccountObjectInterface";

interface Props {
  accounts: AccountObject[];
}

const AccountSelector: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountObject[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<AccountObject>({id: '0'});

  useEffect(() => {
    setAccounts(props.accounts);
    setSelectedAccount(props.accounts[0]);
    return () => {
      // cleanup
    };
  }, []);

  const arr = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
      <div className="max-w-sm">
        <CardComponent>
          <div
            className="grid grid-cols-11 m-3 cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          >
            <div className="align-middle mt-auto mb-auto text-lg col-span-1 text-green-800">
              <FaAtlassian />
            </div>
            <div className="col-span-9">
              <div className="text-xl text-green-600">
                BS: <span className="font-bold">{selectedAccount.accountHolder}</span>
              </div>
              <div className="text-lg text-gray-500">
                {selectedAccount.accountNumber}
              </div>
              <div className="text-gray-500">
                {selectedAccount.accountBalance ?? 
                    <span className="flex">
                        {
                            arr.map(ar => <VscCircleFilled className="text-base text-gray-700"/>)
                        }
                    </span>
                }
              </div>
            </div>
            <div className="align-middle mt-auto mb-auto text-lg col-span-1">
              <AiOutlineRight style={{ color: "green" }} />
            </div>
          </div>
        </CardComponent>

        {showModal && (
          <div className="bg-black fixed bg-green">
            <MyModalComponent
              heading="Select your account"
              accounts={accounts}
              selectedAccount={selectedAccount}
              selectedAccountChanged={(newAccount) => {
                    if(newAccount) {
                        setSelectedAccount(newAccount)
                    }
                }
              }
              closeModal={() => setShowModal(false)}
              showFooter
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AccountSelector;
