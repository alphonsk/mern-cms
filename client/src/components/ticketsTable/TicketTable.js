import React from 'react'

import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './ticket-table.css';


export const TicketTable = ({ tickets }) => {
    return (
        <div>
            <Table striped bordered hover className="ticket-table">
                <thead>
                    <tr>
                        <th> # </th>
                        <th> subject </th>
                        <th> description </th>
                        <th> date </th>
                    </tr>
                </thead>
                <tbody>
                    {(tickets.length > 0) && tickets.map(ticket => {
                        const { id, subject, addedAt } = ticket;
                        return (<tr key={id}>
                            <td> {id}</td>
                            <td>
                                <Link to={`/ticket/${id}`}>
                                    {subject}
                                </Link>
                            </td>
                            <td> i did not get paid </td>
                            <td> {addedAt} </td>
                        </tr>)
                    }
                    )}

                    {
                        !tickets.length && <tr > <td colSpan="4" style={{ textAlign: "center" }}> No tickets </td>  </tr>
                    }


                </tbody>
            </Table>
        </div>
    )
}
