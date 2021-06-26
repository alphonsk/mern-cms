import React from 'react'
import PropTypes from 'prop-types';
//

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './dashboard.css';


//  
export const NewTicketForm = ({ onSubmit, handleChange, formData, formErrors }) => {
    const { subject, issueDate, description } = formData;
    const { subjectInvalid, descriptionInvalid } = formErrors



    return (
        <Container className="newTicket-container" >
            <Row>
                <Container className="newTicket-form-container">
                    <Row>
                        <Col>
                            <h3 className="login-header"> Add new ticket</h3>
                            <hr />
                            <Form autoComplete="off" onSubmit={onSubmit} className="text-left">
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}> Subject </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            // type="email"
                                            name="subject"
                                            value={subject}
                                            minLength="3"
                                            maxLength="333"
                                            onChange={handleChange}
                                            placeholder="Enter a subject"
                                        // required
                                        />
                                        <Form.Text className="text-danger">
                                            {subjectInvalid && "Subject required"}
                                        </Form.Text>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}> Issue found </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="date"
                                            name="issueDate"
                                            value={issueDate}
                                            onChange={handleChange}
                                        // required
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label > Description </Form.Label>
                                    <Form.Control as="textarea"
                                        name="description"
                                        // rows="4"
                                        rows={4}
                                        value={description}
                                        onChange={handleChange}
                                        placeholder="Enter a description"
                                    // required
                                    />
                                </Form.Group>
                                <Form.Text className="text-danger">
                                    {descriptionInvalid && "Description required"}
                                </Form.Text>
                                <Button type="submit" block variant="info"> Save </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}


NewTicketForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    // subject: PropTypes.string.isRequired, 
    // description: PropTypes.string.isRequired,
    // status: PropTypes.string.isRequired,
}
