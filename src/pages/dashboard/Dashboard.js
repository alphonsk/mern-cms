import React from 'react'
//
import { TicketTable } from '../../components/ticketsTable/TicketTable'

import { Container, Row, Col, Button } from 'react-bootstrap';
import './dashboard.css';

import tickets from '../../assets/testticketdata.json'

export const Dashboard = () => {
    return (
        <Container className="dashboard-container" >
            <Row>
                <Col className="text-center mt-5 mb-2" >
                    <Button>
                        Add new ticket
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col className="text-center mt-2" >
                    <div> Total tickets: 50</div>
                    <div> Pending tickets: 6</div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div> Recently added tickets </div>
                    {/* <hr></hr> */}
                    {/* <div>   </div>
                    <div> </div> */}
                    <TicketTable tickets={tickets} />
                </Col>
            </Row>
        </Container>

    )
}

// export default Dashboard
