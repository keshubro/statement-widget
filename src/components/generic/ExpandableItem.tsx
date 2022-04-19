import React, { useState } from "react";
import { ExpandableItemProps, ItemObject } from "../../interfaces/AccountObjectInterface";

export const ExpandableItem: React.FC<ExpandableItemProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function _renderExpandedPart() {
    return (
      <div className="flex flex-col border-l-2 border-l-green-600 bg-gray-100">
        {props?.details &&
          props?.details?.map((item) => {
            return (
              <div className=" px-3 text-base  grid grid-cols-7">
                <span className="text-gray-600 col-span-2">{item.label}</span>
                <span>:</span>
                <span className="text-gray-800 col-span-4">{item.value}</span>
              </div>
            );
          })}
          
          {
              props?.displayDownloadButton && <button className="text-sm border bg-gray-300 border-green-600 rounded px-2 py-1 w-min ml-3 mt-5 mb-2">Download</button>
          }
      </div>
    );
  }

  return (
    <div className="bg-white">
      <span
        className="font-semibold flex items-center border-l-2 border-l-green-600 bg-gray-100 px-3 py-2 text-base hover:cursor-pointer"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {props.title}
      </span>
      {isExpanded && _renderExpandedPart()}
    </div>
  );
};