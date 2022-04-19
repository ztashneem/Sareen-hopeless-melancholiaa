import React from 'react';
import { VscTwitter } from 'react-icons/vsc';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { TiSocialVimeo } from 'react-icons/ti';
import { Nav } from 'react-bootstrap';
import logo from '../../../images/logo-removebg-preview.png'
const Fotter = () => {
    const getYears = new Date();
    let year = getYears.getFullYear();
    return (
        <div className='container-fluid pb-2 bg-dark text-light text-center'>
            <div className='container'>
                <div className="row footer py-5 text-center">
                    <div className="col-md-4 col-12">
                        <p>&copy; {year} Sareen. All rights reserved. <br /> Develope By <span className='text-muted'>Abantee</span> </p>
                    </div>
                    <div className="col-md-4 col-12">
                        <img style={{ width: '110px', height: '55px' }} className='img-fluid imgs' src={logo} alt="" />
                    </div>
                    <div className="col-md-4 col-12 nav_socials mx-auto">
                        <Nav className='links'>
                            <Nav.Link className='ms-3'>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fotter;