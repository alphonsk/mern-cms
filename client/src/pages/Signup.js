import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import './entry.css'
// 
import { SignupForm } from '../components/login/SignupForm';
import { PasswordReset } from '../components/passwordReset/PasswordReset';
import { NewTicketForm } from '../components/newTicket/NewTicketForm';


export const Signup = () => {
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const { email, password, confirmPassword } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            alert('please enter all info');
        }

        if (password !== confirmPassword) {
            alert('passwords do not march')
        }

    }


    const signupFormProps = {
        handleChange,
        onSubmit,
        email,
        password,
        confirmPassword
    }

    return (
        <div className="entry-page">
            <Jumbotron >
                <div className="login-form">
                    <SignupForm {...signupFormProps} />

                    <p className='center-btn' style={{ color: 'blue' }}>
                        <Link to="/" style={{ textDecoration: "none" }}> Login </Link>
                        {"  |  "}
                        <span className='center-btn' style={{ fontStyle: 'normal', color: 'blue', textDecoration: "none" }}>
                            <Link to="/signup" style={{ textDecoration: "none" }}> Signup</Link>
                        </span>
                    </p>
                </div>
            </Jumbotron>

        </div>
    )
}


