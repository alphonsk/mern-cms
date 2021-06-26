import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
// import './login.css'



export const UpdateTicket = ({ handleChange, onSubmit, update, msgs }) => {

    return (
        <Container className="updateTicket-container mt-5">
            <Row>
                <Col>
                    <h3 className="updateTicket-header"> {msgs ? 'Reply' : 'Chat'}   </h3>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Control as="textarea"
                                name="update"
                                rows={4}
                                value={update}
                                onChange={handleChange}
                                placeholder={msgs ? "Reply here" : "Start a chat"}
                                required
                            />
                        </Form.Group>
                        <Form className="text-right">
                            <Button type="submit"> {msgs ? 'Reply' : 'Chat'} </Button>
                        </Form>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
