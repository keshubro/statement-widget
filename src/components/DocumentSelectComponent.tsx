import React from "react";
import { SetDocumentType } from "../contexts/DocumentTypeContext";
import { SetFilter } from "../contexts/FilterContext";
import { SetSelectedFilter } from "../contexts/SelectedFilterContext";
import { DocumentObject } from "../interfaces/AccountObjectInterface";

const DocumentSelectComponent: React.FC<{
  documentTypes: Array<DocumentObject>;
}> = ({ documentTypes }) => {
  const setDocType = SetDocumentType();
  const handleFilterChange = SetFilter();
  const setSelectedFilter = SetSelectedFilter();

  const _handleDocTypeChange = (e: any) => {
    setDocType(e?.target?.value);
    const val = e?.target?.value;
    handleFilterChange(val);

    let defaultSelectedFilter = "";
    if (e.target.value === "INVSTMT" || e.target.value === "QRTSTMT") {
      defaultSelectedFilter = "MOST_RECENT";
    } else if (e.target.value === "INCRPT") {
      defaultSelectedFilter = "DATE_RANGE";
    }
    setSelectedFilter(defaultSelectedFilter);
  };

  return (
    <>
        <div className="mb-1">
            <label className="text-base font-bold">Select Document :</label>
        </div>
        <select
            className="px-2 py-2 w-1/2 text-base rounded border border-black focus:border-green-500 shadow outline-none"
            name="documentTypes"
            id="documentTypes"
            onChange={(e) => _handleDocTypeChange(e)}
        >
            {documentTypes.map((doc) => (
            <option value={doc.documentTypeNumber}>
                {doc.documentTypeLabel}
            </option>
            ))}
        </select>
    </>
  );
};

export default DocumentSelectComponent;
