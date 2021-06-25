import React, { useState, useEffect } from 'react'
//
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, Redirect } from "react-router-dom";

import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import tickets from '../../assets/testticketdata.json'
import { Messages } from '../../components/messages/Messages';
import { UpdateTicket } from '../../components/updateTicket/UpdateTicket';

// const ticket = tickets[0];
// const { id } = useParams();


export const Ticket = () => {
    // const [messages, setMessages] = useState([])
    const [update, setUpdate] = useState('');
    const [ticket, setTicket] = useState('');
    const { id } = useParams();
    let ticketObj = tickets.filter((e) => { return (e.id == id); })

    useEffect(() => {
        let x = ticketObj[0];
        setTicket(x)
    }, [id])

    const { subject, status, addedAt } = ticket;

    const handleChange = (e) => {
        setUpdate(e.target.value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        alert(update);
    }

    const updateProps = {
        handleChange,
        onSubmit,
        update,
        msgs: (ticket.history) ? ticket.history.length : 0
    }

    return (
        <Container className="newTicket-container" >
            <Row>
                <Col>
                    <PageBreadcrumb pageName='Ticket' />
                </Col>
            </Row>
            <Row className="mt-5 mb-2">
                <Col className="" >
                    <div className="subject" ><b>Subject: </b> {subject} </div>
                    <div className="date" ><b>Added:</b> {addedAt} </div>
                    <div className="status" ><b>Status: </b> {status} </div>
                </Col>
                <Col className="text-right" >
                    <Button variant="outline-info"> Close ticket</Button>
                </Col>
            </Row>
            <Row>
                <Col className="" >
                    <Messages msgs={ticket.history} />
                    {/* <Messages {...msgs} /> */}
                    {/* <Messages msg={{ subject: 'sub', issueDate: 'date', description: 'des' }} /> */}
                </Col>
            </Row>
            <Row>
                <Col className="" >
                    <UpdateTicket {...updateProps} />
                </Col>
            </Row>
        </Container>
    )
}
