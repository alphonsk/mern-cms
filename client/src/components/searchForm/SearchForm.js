import React from 'react'
import PropTypes from 'prop-types';
//

import { Container, Row, Col, Form } from 'react-bootstrap';

export const SearchForm = ({ handleChange, searchStr }) => {
    return (
        <Container className="searchForm-container" >
            <Row>
                <Container className="searchForm-form-container">
                    <Row>
                        <Col>
                            <Form autoComplete="off" className="text-left">
                                <Form.Group as={Row}>
                                    <Col >
                                        <Form.Control
                                            name="searchTicket"
                                            value={searchStr}
                                            onChange={handleChange}
                                            placeholder="Search ticket"
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>

    )
}

SearchForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    searchStr: PropTypes.string.isRequired,
    // msg: PropTypes.object.isRequired,
}