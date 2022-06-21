import React from 'react'
import { ExpandableItemProps } from '../interfaces/AccountObjectInterface'
import { ExpandableItem } from './generic/ExpandableItem'

export const DocumentListComponent: React.FC<{ documentList: ExpandableItemProps[]}> = ({ documentList }) => {

    return (
        <div>
            {
                documentList.map((doc) => {
                    return <div className="mb-1"><ExpandableItem title={doc.title} details={doc.details} filename={doc.filename} displayDownloadButton/></div>
                })
            }
        </div>
    )
}
