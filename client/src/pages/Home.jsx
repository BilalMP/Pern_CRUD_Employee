import React, { useEffect, useState } from 'react'
import DeleteAll from '../components/DeleteAll'
import { Link } from 'react-router-dom'
import Table from "../components/Table"
import ViewTableAttributes from "../data/viewTableAttributes"
const Home = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = async () => {
        try {
            const response = await fetch("http://localhost:5000/employees");
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getEmployees();
    }, []);


    const deleteEmployee = async (id) => {
        const response = await fetch(`http://localhost:5000/employees/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json ; charset=utf-8" }
        })
        if (response.ok) {
            window.location = "/"
        }
    }

    return (
        <>
            <Table attributes={ViewTableAttributes}>
                {employees.length > 0 ? (
                    employees.map(employee => (
                        <tr className="border-b" key={employee.id}>
                            <td className="whitespace-nowrap px-6 py-4">{employee.id}</td>
                            <td className="whitespace-nowrap px-6 py-4">{employee.firstName}</td>
                            <td className="whitespace-nowrap px-6 py-4">{employee.lastName}</td>
                            <td className="whitespace-nowrap px-6 py-4">{employee.dept}</td>
                            <td className="whitespace-nowrap px-6 py-4">{employee.title}</td>
                            <td className="whitespace-nowrap px-6 py-4">{employee.dob}</td>
                            <td className="whitespace-nowrap px-6 py-4">{employee.salary}</td>
                            <td className="whitespace-nowrap px-6 py-4">{employee.email}</td>
                            <td className="whitespace-nowrap px-6 py-4 gap-1 flex">
                                <Link to={`/view-employee/${employee.id}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </Link>
                                <Link to={`/edit-employee/${employee.id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </Link>
                                <button onClick={() => deleteEmployee(employee.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))) : (
                    <tr className='text-center fond-bold'>
                        <td colSpan={ViewTableAttributes.length} className='font-bold text-lg py-5'>No employees found</td>
                    </tr>
                )
                }
            </Table>
            <DeleteAll />
        </>
    )
}

export default Home