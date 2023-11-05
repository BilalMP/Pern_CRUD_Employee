import React from 'react'

const Flex = ({ children }) => {
    return (
        <div className="flex gap-5">
            {children}
        </div>
    )
}

export default Flex