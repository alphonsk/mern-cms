import React from 'react'
// import React, { useState } from 'react'
// import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './login.css'



export const LoginForm = ({ handleChange, email, password, onSubmit }) => {

    return (
        <Container className="login-container">
            <Row>
                <Col>
                    <h3 className="login-header"> Login</h3>
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
                        <Button type="submit"> Login</Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

// LoginForm.propTypes = {
//     handleChange: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired,
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired
// }

// export default LoginForm
