import React, { useState } from 'react';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [name, setName] = useState(selectedEmployee.name);
    const [rollNo, setRollNo] = useState(selectedEmployee.rollNo);
    const [checkIn, setCheckIn] = useState(selectedEmployee.checkIn);
    const [checkOut, setCheckOut] = useState(selectedEmployee.checkOut);

    const handleUpdate = e => {
        e.preventDefault();

        const employee = {
            id,
            name,
            rollNo,
            checkIn,
            checkOut
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="rollNo">rollNo</label>
                <input
                    id="rollNo"
                    type="text"
                    name="rollNo"
                    value={rollNo}
                    onChange={e => setRollNo(e.target.value)}
                />
                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit