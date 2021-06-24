import React, { useState, useEffect } from 'react'
import { NewTicketForm } from '../../components/newTicket/NewTicketForm'
//
import { Container, Row, Col } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import './newTicket.css';
import { validateNewTicketForm } from '../../utils/newTicketValidation';

export const NewTicket = () => {
    const [formData, setFormData] = useState({ subject: '', issueDate: '', description: '' });
    const { subject, description } = formData; // subject, issueDate, description
    const [formErrors, setFormErrors] = useState({ subjectInvalid: false, descriptionInvalid: false })

    //
    useEffect(() => {
    }, [formData, formErrors])


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === 'subject') {
            setFormErrors({ ...formErrors, subjectInvalid: false })
        }
        if (e.target.name === 'description') {
            setFormErrors({ ...formErrors, descriptionInvalid: false })
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        let subjectInvalid = await validateNewTicketForm(subject);
        let descriptionInvalid = await validateNewTicketForm(description);

        if (subjectInvalid) {
            setFormErrors({ ...formErrors, subjectInvalid: true })
        }
        if (descriptionInvalid) {
            setFormErrors({ ...formErrors, descriptionInvalid: true })
        }
    }

    const newTicketFormProps = {
        formData,
        handleChange,
        onSubmit,
        formErrors,
    }




    return (
        <Container className="newTicket-container" >
            <Row>
                <Col>
                    <PageBreadcrumb pageName='New ticket' />
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2" >
                    <NewTicketForm {...newTicketFormProps} />
                </Col>
            </Row>
        </Container>
    )
}
