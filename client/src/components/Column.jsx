import React from 'react'

const Column = ({ children }) => {
    return (
        <div className="flex flex-col py-2 px-2 w-[50%]">
            {children}
        </div>
    )
}

export default Column