import React from 'react';
import { Accordion } from 'react-bootstrap';
import Story from '../Photgrapher/Story/Story';
import './Blog.css'
const Blogs = () => {
    return (
        <div className='container'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Authentication vs. Authorization</Accordion.Header>
                    <Accordion.Body>
                        <>
                            <div className="row">
                                <div className="col-md-6 col-12 p-3">
                                    <h3 className='fw-bold text-center mb-3'>Authentication</h3>
                                    <div>
                                        <li>Authentication verifies who the user is.</li>
                                        <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user</li>
                                        <li>Authentication is the first step of a good identity and access management process.</li>
                                        <li>Authentication is visible to and partially changeable by the user.</li>
                                        <li>Authentication verifies who the user is.</li>
                                    </div>

                                </div>
                                <div className="col-md-6 col-12 p-3">
                                    <h3 className='fw-bold text-center mb-3'>Authorization</h3>
                                    <div>
                                        <li>Authorization determines what resources a user can access.</li>
                                        <li>Authorization works through settings that are implemented and maintained by the organization..</li>
                                        <li>Authorization always takes place after authentication.</li>
                                        <li>Authorization isn’t visible to or changeable by the user.</li>
                                        <li>Authorization determines what resources a user can access.</li>
                                    </div>
                                </div>
                            </div>
                        </>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why we using firebase? What other options  to do implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <h3 className='fw-bold text-center mb-3'>Why we are using firebase?</h3> <br />
                                <p className='mt-2'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                            </div>
                            <div className="col-md-6 col-12">
                                <h3 className='fw-bold '>What are options for authentication?</h3>
                                <code className='text-center mb-3'>5 Common Authentication Types</code> <br /><br />
                                <p>
                                    <li>Password-based authentication. Passwords are the most common methods of authentication. ...</li>
                                    <li>Multi-factor authentication. ...</li>
                                    <li>Certificate-based authentication. ...</li>
                                    <li>Biometric authentication. ...</li>
                                    <li> Token-based authentication</li>
                                </p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <h3 className='fw-bold text-center mb-3 '>What other services does firebase provide other than authentication?</h3>
                            <div className="col-md-4 col-12"></div>
                            <div className="col-md-4 col-12">


                                <p className='text-center mt-2'>
                                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                                </p>
                            </div>
                            <div className="col-md-4 col-12"></div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Story></Story>
        </div>
    );
};

export default Blogs;