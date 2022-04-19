import React from 'react';

interface Props {
    text?: String,
    children?: React.ReactNode;
}

const CardComponent: React.FC<Props> = (props) => {
    return (
        <div className="text-2xl rounded-lg overflow-hidden shadow-lg h-full bg-white">
            {props.children}
        </div>
    )
}

export default CardComponent
