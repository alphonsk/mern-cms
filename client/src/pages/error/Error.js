import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'



export const Error = () => {
    return (
        <Container className="updateTicket-container mt-5">
            <Row>
                <Col className="" style={{ 'margin-left': '20%', 'margin-top': '15%' }} >
                    <h2>  We cannot find that page you looking for... </h2>
                </Col>
            </Row>
        </Container>
    )
}

// export default Error