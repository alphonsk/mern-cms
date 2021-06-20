import React from 'react'

import { Table } from 'react-bootstrap';
// import './dashboard.css';


export const TicketTable = ({ tickets }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> status </th>
                        <th> description </th>
                        <th> date </th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.length && tickets.map(ticket => {
                        const { id, status, addedAt } = ticket;
                        return (<tr key={id}>
                            <td> {id}</td>
                            <td> {status} </td>
                            <td> i did not get paid </td>
                            <td> {addedAt} </td>
                        </tr>)
                    }
                    )}


                </tbody>
            </Table>
        </div>
    )
}
