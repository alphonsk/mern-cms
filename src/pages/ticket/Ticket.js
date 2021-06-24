import React, { useState, useEffect } from 'react'
//
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import tickets from '../../assets/testticketdata.json'
import { Messages } from '../../components/messages/Messages';
import { UpdateTicket } from '../../components/updateTicket/UpdateTicket';
const ticket = tickets[0];

export const Ticket = () => {
    const { subject, status, addedAt } = ticket;
    const [update, setUpdate] = useState('');

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
            {ticket.history && <>
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
            </>}
        </Container>
    )
}
