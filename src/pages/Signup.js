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
    // const [loadForm, setLoadForm] = useState('login');
    // const [signUpForm, setSignUpForm] = useState(false);


    // const handleChange = (e) => {
    //     switch (e.target.name) {
    //         case 'email':
    //             setEmail(e.target.value);
    //             break;
    //         case 'password':
    //             setPassword(e.target.value);
    //             break;
    //         default:
    //             break;
    //     }
    // }
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

        // confirmPassword
        // setEmail(email);
        // setPassword(password);
        // console.log(email, password);
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

// export default Entry
