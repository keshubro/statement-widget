import React from "react";
import { GetFilter } from "../contexts/FilterContext";
import { GetSelectedFilter, SetSelectedFilter } from "../contexts/SelectedFilterContext";
import { SetShowDocumentsListValue } from "../contexts/ShowDocumentsListContext";

const FilterComponent: React.FC = () => {
    const filterSelected = GetSelectedFilter();
    const setFilterSelected = SetSelectedFilter();
    const setShowDocumentsListValue = SetShowDocumentsListValue();

    const _handleFilterChange = (e: any) => {
        setFilterSelected(e?.target?.value);
        setShowDocumentsListValue(false);
    };

    const filterArray = GetFilter();

    function renderFilter(filter: any) {
        switch (filter) {
        case "MOST_RECENT":
            return (
            <div className="flex items-center border border-black rounded p-2 mb-3  rounded-2 checked:border-green-300">
                <input
                type="radio"
                id="mostRecent"
                value="MOST_RECENT"
                name="filters"
                className="cursor-pointer checked:border-blue-600 mr-2 text-green-500 checked:border-green-300"
                checked={filterSelected === "MOST_RECENT"}
                onChange={(e) => _handleFilterChange(e)}
                ></input>
                <label htmlFor="mostRecent" className="text-base">Most recent</label>
            </div>
            );

        case "SEQUENCE_NUMBER":
            return (
            <div className="flex items-center border border-black rounded p-2 mb-3 rounded-2 checked:border-green-300">
                <input
                type="radio"
                id="sequenceNumber"
                value="SEQUENCE_NUMBER"
                name="filters"
                className="cursor-pointer mr-2"
                checked={filterSelected === "SEQUENCE_NUMBER"}
                onChange={(e) => _handleFilterChange(e)}
                ></input>
                <label htmlFor="sequenceNumber" className="text-base">Search with sequence number</label>
            </div>
            );

            case "DATE_RANGE":
                return (
                <div className="flex items-center border border-black rounded p-2 mb-3 rounded-2 checked:border-green-300">
                    <input
                    type="radio"
                    id="dateRange"
                    value="DATE_RANGE"
                    name="filters"
                    className="cursor-pointer mr-2"
                    checked={filterSelected === "DATE_RANGE"}
                    onChange={(e) => _handleFilterChange(e)}
                    ></input>
                    <label htmlFor="dateRange" className="text-base">Search with date range</label>
                </div>
                );

                case "QUARTER_NUMBER":
                    return (
                    <div className="flex items-center border border-black rounded p-2 mb-3 rounded-2 checked:border-green-300">
                        <input
                        type="radio"
                        id="quarterNumber"
                        value="QUARTER_NUMBER"
                        name="filters"
                        className="cursor-pointer mr-2"
                        checked={filterSelected === "QUARTER_NUMBER"}
                        onChange={(e) => _handleFilterChange(e)}
                        ></input>
                        <label htmlFor="quarterNumber" className="text-base">Search with quarter number</label>
                    </div>
                    );

            default:
        }
    }

    return (
        <div className="flex flex-col w-9/12">
            <div className="mb-1">
                <label className="text-base font-bold">Period :</label>
            </div>
            {filterArray.map(filter => renderFilter(filter))}
        </div>
        
    );
};

export default FilterComponent;
