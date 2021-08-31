import React from 'react'

export default props => (
    <table className="table">
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Adress</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.street},{item.address.suite},{item.address.city}</td>
                </tr>
            ))}
        </tbody>
    </table>
)