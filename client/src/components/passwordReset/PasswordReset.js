import React from 'react'
// import React, { useState } from 'react'
// import PropTypes from 'prop-types';

import '../login/login.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const PasswordReset = ({ handleChange, email, password, onSubmit }) => {


    return (
        <Container className="login-container">
            <Row>
                <Col>
                    <h3 className="login-header">Reset Password</h3>
                    <hr />
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label> Email </Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter an Email"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label> Password </Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                placeholder="Enter an password"
                                required
                            />
                        </Form.Group>
                        <Button type="submit"> Reset </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

// PasswordReset.propTypes = {
//     handleChange: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired,
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired
// }

// export default PasswordReset
