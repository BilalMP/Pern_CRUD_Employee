import React from 'react'

const DeleteAll = () => {
    const deleteAllHandler = async () => {
        const response = await fetch("http://localhost:5000/employees", {
            method: "DELETE",
            headers: { "Content-Type": "application/json ; charset=utf-8" }
        })
        const data = await response.json();
        console.log(data);
        if(response.ok){
            window.location = "/"
        }
    }
    return (
        <div className='flex justify-end px-20 pb-5'>
            <button className='bg-red-600 text-white px-5 py-2 rounded-full' onClick={deleteAllHandler}>Delete All</button>
        </div>
    )
}

export default DeleteAll