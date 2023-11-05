import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Flex from "../components/Flex"
import Button from "../components/Button"
import Column from "../components/Column"
import Input from "../components/Input"
import Select from "../components/Select"

const EditEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dept, setDept] = useState("");
    const [title, setTitle] = useState("");
    const [dob, setDob] = useState("");
    const [salary, setSalary] = useState("");
    const [email, setEmail] = useState("");

    const { employeeId } = useParams();

    const getEmployeeById = async () => {
        const response = await fetch(`http://localhost:5000/employees/${employeeId}`)
        if (response.ok) {
            const data = await response.json();
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setDept(data.dept)
            setTitle(data.title)
            setDob(data.dob)
            setSalary(data.salary)
            setEmail(data.email)
        } else {
            console.error('Failed to fetch employee data');
        }
    }

    useEffect(() => {
        getEmployeeById()
    }, [])

    // first name handler
    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    // last name handler
    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    // dept handler
    const deptHandler = (event) => {
        setDept(event.target.value);
    }

    // title handler
    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    // dob handler
    const dobHandler = (event) => {
        setDob(event.target.value);
    }

    // salary handler 
    const salaryHandler = (event) => {
        setSalary(event.target.value);
    }

    // email handler
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const submitEditEmployeeForm = async (event) => {
        event.preventDefault();
        const body = { firstName, lastName, dept, title, dob, salary, email };
        const response = await fetch(`http://localhost:5000/employees/${employeeId}`,{
            method:"PUT",
            headers: { "Content-Type": "application/json ; charset=utf-8" },
            body: JSON.stringify(body)
        })
        if(response.ok){
            window.location = "/"
        }
    }

    return (
        <div className='flex justify-center'>
            <form onSubmit={submitEditEmployeeForm} className='w-[80%] py-5 px-5'>
                <Flex >
                    <Column>
                        <Input label="First Name" changeHandler={firstNameHandler} inputValue={firstName} type="text" name="firstName" placeholder="Enter First Name" />
                    </Column>
                    <Column>
                        <Input label="Last Name" changeHandler={lastNameHandler} inputValue={lastName} type="text" name="lastName" placeholder="Enter Last Name" />
                    </Column>
                </Flex>
                <Flex >
                    <Column>
                        <Input label="Department" changeHandler={deptHandler} inputValue={dept} type="text" name="dept" placeholder="Enter Department" />
                    </Column>
                    <Column>
                        <Select label="Title" changeHandler={titleHandler} name="title" placeholder="Select a title" />
                    </Column>
                </Flex>
                <Flex>
                    <Column>
                        <Input label="Date of Birth" changeHandler={dobHandler} inputValue={dob} type="date" name="dob" placeholder="Enter Date of Birth" />
                    </Column>
                    <Column>
                        <Input label="Salary" changeHandler={salaryHandler} inputValue={salary} type="number" name="salary" placeholder="Enter Salary" />
                    </Column>
                </Flex>
                <Flex>
                    <Column>
                        <Input label="Email Address" changeHandler={emailHandler} inputValue={email} type="email" name="email" placeholder="Enter Email Address" />
                    </Column>
                    <Column>
                        <Button>Edit Employee</Button>
                    </Column>
                </Flex>
            </form>
        </div>
    )
}

export default EditEmployee