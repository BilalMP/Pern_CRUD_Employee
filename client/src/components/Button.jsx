import React from 'react'

const Button = ({ children }) => {
    
    return (
        <button type='submit' className='text-white py-3 px-5 rounded-xl bg-slate-800 w-[200px] mt-7'>
            {children}
        </button>
    )
}

export default Button