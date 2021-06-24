import React from 'react'
import PropTypes from 'prop-types';
//
import { Container, Row, Col } from 'react-bootstrap';
import './messages.css'

export const Messages = ({ msgs }) => {

    if (!msgs) { return (<div></div>) }

    return (
        <Container className="messages-container" >
            {
                msgs.map((msg, i) => {
                    const { date, message, messageBy } = msg;
                    return (
                        <Row key={i} className={`mt-3 mb-3 border rounded pt-1 pb-1 pl-5 ${messageBy}`} >
                            <Col sm={4}>
                                <div> <b> {messageBy} </b></div>
                                <div> {date} </div>
                            </Col>
                            <Col sm={8}>
                                <div>
                                    {message}
                                </div>
                            </Col>
                        </Row>
                    )
                })
            }

        </Container>
    )
}

Messages.propTypes = {
    msgs: PropTypes.array.isRequired,
    // subject: PropTypes.string.isRequired 
    // onSubmit: PropTypes.func.isRequired,
}