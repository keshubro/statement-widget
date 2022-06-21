import React, { useState, useRef } from "react";
// import { Datepicker } from "./generic/Datepicker";
import { InputField } from "./generic/InputField";

export const OptionalFieldsComponent: React.FC<{ selectedFilter: string, handleOptionalFieldsValueChange?: (a:string, b:string) => void }> = ({
  selectedFilter,
  handleOptionalFieldsValueChange
}) => {

    const [calenderState, setCalenderState] = useState<boolean>(false);

    const yearRef = useRef(null);
    const sequenceNumberRef = useRef(null);
    const quarterRef = useRef(null);
    const fromDateRef = useRef(null);
    const toDateRef = useRef(null);

    function _handleFieldChange() {
        const year = yearRef.current?.value ?? undefined;
        const sequenceNumber = sequenceNumberRef.current?.value ?? undefined;
        const quarterNumber = quarterRef?.current?.value ?? undefined;

        const paramsObj = {
            year,
            sequenceNumber,
            quarterNumber
        }
        
        handleOptionalFieldsValueChange(paramsObj);
    }

    function _getYearField(customRef:any, showLabel:boolean = true) {
        const currentYear = new Date().getFullYear();
        const yearArray = [];
        for(let year = currentYear; year >= currentYear-10; year--) {
            yearArray.push(year);
        }
        return (
            <div className="flex flex-col">
                {showLabel && <label htmlFor="year" className="text-base mb-1">Year</label>}
                <select onChange={() => _handleFieldChange()} ref={customRef ?? yearRef} id="year" className="px-2 py-2 text-base rounded border border-black focus:border-green-500 shadow outline-none">
                    {yearArray.map((year) => {
                        return <option value={year}>{year}</option>
                    })}
                </select>
            </div>
        )
    }
  function _getSequenceNumberFields() {
    return (
        <div className="w-1/3">
            <div className="flex flex-col mb-4">
                <label htmlFor="seqnumber" className="text-base mb-1">Sequence Number</label>
                <InputField handleValueChange={_handleFieldChange} sendRef={sequenceNumberRef} inputType="text" halfWidth/>
            </div>
            {_getYearField(null)}
        </div>
    );
  }

  function _getQuarterNumberFields() {
      const quarterArray = [1, 2, 3, 4];
    return (
        <div className="w-1/3">
            <div className="flex flex-col mb-4">
                <label htmlFor="quarternumber" className="text-base mb-1">Quarter</label>
                <select onChange={() => _handleFieldChange()} ref={quarterRef} className="px-2 py-2 text-base rounded border border-black focus:border-green-500 shadow outline-none">
                    {quarterArray.map((quarter) => {
                        return <option value={quarter}>{quarter}</option>
                    })}
                </select>
            </div>
            {_getYearField(null)}
        </div>
    )
  }

  function _getDateRangeFields() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
                <label className="text-base">From</label>
                <div className="w-2/3">{_getYearField(fromDateRef, false)}</div>
            </div>
            <div className="flex flex-col">
                <label className="text-base">To</label>
                <div className="w-2/3">{_getYearField(toDateRef, false)}</div>
            </div>
        </div>
        
    )
  }

  function _handleCalenderClick() {
      setCalenderState(!calenderState);
  }

  function _renderOptionalFields() {
    let fields;
    
    switch (selectedFilter) {
      case "SEQUENCE_NUMBER":
        fields = _getSequenceNumberFields();
        break;
      case "QUARTER_NUMBER":
        fields = _getQuarterNumberFields();
        break;
      case "DATE_RANGE":
        fields = _getDateRangeFields();
        break;
      default:
    }
    return fields;
  }

  return <>{selectedFilter !== "MOST_RECENT" && _renderOptionalFields()}</>;
};
