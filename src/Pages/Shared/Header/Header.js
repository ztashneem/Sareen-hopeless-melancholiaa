import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.jpg';
import './Header.css';

import { VscTwitter } from 'react-icons/vsc';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { TiSocialVimeo } from 'react-icons/ti';
import { Link } from 'react-router-dom';


const Header = () => {
   
    return (
        <div className='header-bg'>

            <Navbar collapseOnSelect expand="lg"  variant="light">
                <Container >
                    <Navbar.Brand className='mx-auto brand' ><img className='img-fluid imgs' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='navlinks'>
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>
                                Blogs
                            </Nav.Link>
                            <Nav.Link as={Link} to='/about'>
                                About me
                            </Nav.Link>
                            <Nav.Link as={Link} to='/login'>
                                Login
                            </Nav.Link>
                           
                        </Nav>

                        <Nav className='d-none d-lg-flex mx-auto nav_socials'>
                            <Nav.Link>
                                <VscTwitter></VscTwitter>
                            </Nav.Link>
                            <Nav.Link >
                                <FaFacebookF></FaFacebookF>
                            </Nav.Link>
                            <Nav.Link >
                                <TiSocialVimeo className='fosvimeoi'></TiSocialVimeo>
                            </Nav.Link>
                            <Nav.Link >
                                <FaInstagram></FaInstagram>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;