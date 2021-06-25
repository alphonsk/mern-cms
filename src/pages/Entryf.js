import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import './entry.css'
// 
import { LoginForm } from '../components/login/LoginForm';
import { PasswordReset } from '../components/passwordReset/PasswordReset';
import { NewTicketForm } from '../components/newTicket/NewTicketForm';


export const Entry = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState(''); 
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const { email, password, confirmPassword } = formData;
    const [loadForm, setLoadForm] = useState('login');
    const [signUpForm, setSignUpForm] = useState(false);


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
        if (!email || !password) {
            alert('please enter email')
        }

        if (signUpForm) {
            if (!email || !password || !confirmPassword) {
                alert('please enter email');
            }
        }



        // confirmPassword
        // setEmail(email);
        // setPassword(password);
        // console.log(email, password);
    }

    const showForm = () => {
        if (loadForm === 'login')
            setLoadForm('passwordReset')
        if (loadForm === 'passwordReset')
            setLoadForm('login')
    }


    const loginFormProps = {
        handleChange,
        onSubmit,
        email,
        password
    }

    return (
        <div className="entry-page">
            <Jumbotron >
                <div className="login-form">
                    {/* <NewTicketForm {...loginFormProps} /> */}
                    {(loadForm === 'login') && <LoginForm {...loginFormProps} />}
                    {(loadForm === 'passwordReset') && <PasswordReset />}
                    <hr />
                    <p onClick={showForm} className='center-btn' style={{ fontStyle: 'italic', color: 'blue' }}>
                        {(loadForm === 'passwordReset') ? 'Login' : 'Reset password'}
                        {"  |  "}
                        <span className='center-btn' style={{ fontStyle: 'normal', color: 'blue', textDecoration: "none" }}>
                            <Link to="/signup" style={{ textDecoration: "none" }}> Signup</Link>
                        </span></p>
                </div>
            </Jumbotron>

        </div>
    )
}

// export default Entry
