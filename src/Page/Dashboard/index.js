import React, { useState } from 'react';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { employeesData } from '../../data';

function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    let [count, setCount] = useState(employeesData.length);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }

   

    const handleDelete = (id) =>{
        
        const [employee] = employees.filter(employee => employee.id === id);
        const date = new Date();
        const showTime = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
        employee.checkOut = showTime;
        console.log(employees);
        setEmployees([...employees]);
        let temp = employees.filter(employee => employee.checkOut === 'currently present');
        setCount(temp.length)
        console.log(temp.length);
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                    setCount={setCount}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
            <h4>Total Number of students currently present are : {count}</h4>
        </div>
    )
}

export default Dashboard;