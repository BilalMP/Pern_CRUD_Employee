import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='flex justify-between px-20 bg-slate-100 py-3'>
            <Link to={"/"} className='font-bold'>Employee Dashboard</Link>
            <Link to={"/create-employee"} className='text-slate-600 font-bold text-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </Link>
        </div>
    )
}

export default Header