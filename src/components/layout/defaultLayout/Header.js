import React from 'react'

import { Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

import './defaultLayout.css'


export const Header = () => {
    const history = useHistory();


    const logmeout = () => {
        history.push("/");
    }
    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
                <Link to="/"> HOME </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/dashboard"> Dashboard</Link>
                    <Link to="/tickets"> Tickets</Link>
                    <Link to="/newTicket"> newTicket</Link>
                    <Link to="/ticket"> ticket</Link>
                    <Link onClick={logmeout}> Logout</Link>
                    {/* <Nav.Link href="/dashboard"> Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard"> Tickets</Nav.Link>
                    <Nav.Link href="/dashboard"> Logout</Nav.Link> */}

                </Nav>
            </Navbar.Collapse>

        </Navbar >
    )
}


