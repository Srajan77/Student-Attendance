import React, { useState, useRef, useEffect } from 'react';

function Add({ employees, setEmployees, setIsAdding, setCount }) {

    let [name, setName] = useState('');
    let [rollNo, setRollNo] = useState('');
    let [checkIn, setCheckIn] = useState('');
    let [checkOut, setcheckOut] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        

         const date = new Date();
         const showTime = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
         //console.log(showTime);
         checkIn = showTime;
         checkOut = "currently present"
         console.log(checkIn);

        const id = employees.length + 1;
        const newEmployee = {
            id,
            name,
            rollNo,
            checkIn,
            checkOut
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);
        let temp = employees.filter(employee => employee.checkOut === 'currently present');
        setCount(temp.length)

       
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="name">Enter Name</label>
                <input
                    id="name"
                    type="text"
                    ref={textInput}
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="rollNo">Roll No.</label>
                <input
                    id="rollNo"
                    type="text"
                    name="rollNo"
                    value={rollNo}
                    onChange={e => setRollNo(e.target.value)}
                />
                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add