import React from 'react'

const Input = ({ label, changeHandler, inputValue, type, name, placeholder }) => {
    return (
        <>
            <label htmlFor={name} className='mb-2 pl-2'>{label}</label>
            <input type={type} onChange={changeHandler} value={inputValue} id={name} placeholder={placeholder} className='bg-slate-100 rounded-lg px-5 py-2 hover:border-none text-black placeholder:text-black' />
        </>
    )
}

export default Input