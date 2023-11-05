import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from "../components/Table"
import ViewEmployeeAttributes from "../data/viewEmployeeAttributes"

const ViewEmployee = () => {
    const [employee, setEmployee] = useState(null)

    const { employeeId } = useParams();

    const getEmployeeById = async () => {
        const response = await fetch(`http://localhost:5000/employees/${employeeId}`)
        if (response.ok) {
            const data = await response.json();
            setEmployee(data);
        } else {
            console.error('Failed to fetch employee data');
        }
    }

    useEffect(() => {
        getEmployeeById()
    }, [])

    return (
        <Table attributes={ViewEmployeeAttributes}>
            {employee && (
                <tr className="border-b" key={employee.id}>
                    <td className="whitespace-nowrap px-6 py-4">{employee.id}</td>
                    <td className="whitespace-nowrap px-6 py-4">{employee.firstName}</td>
                    <td className="whitespace-nowrap px-6 py-4">{employee.lastName}</td>
                    <td className="whitespace-nowrap px-6 py-4">{employee.dept}</td>
                    <td className="whitespace-nowrap px-6 py-4">{employee.title}</td>
                    <td className="whitespace-nowrap px-6 py-4">{employee.dob}</td>
                    <td className="whitespace-nowrap px-6 py-4">{employee.salary}</td>
                    <td className="whitespace-nowrap px-6 py-4">{employee.email}</td>
                </tr>
            )}
        </Table>
    )
}

export default ViewEmployee
