import React from 'react'

function List({ employees, handleEdit, handleDelete }) {

    

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>CheckIn Time</th>
                        <th>CheckOut Time</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.name}</td>
                                <td>{employee.rollNo}</td>
                                <td>{employee.checkIn}</td>
                                <td>{employee.checkOut} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Logout
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>No Students</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List