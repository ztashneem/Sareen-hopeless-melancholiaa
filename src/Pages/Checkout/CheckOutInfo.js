import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import nathan from '../../../src/images/Banner/7.jpg'
const CheckOutInfo = () => {
    const { name } = useParams();

    const [user] = useAuthState(auth)



    const [nameS, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [textArea, setTextArea] = useState('');
    const navigate = useNavigate();

    const handleName = (event) => {
        setName(event.target.value);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleTextarea = (event) => {
        setTextArea(event.target.value);
    }


    const shipping = document.getElementById('checkoutinfo');
    const resetall = () => {
        shipping.innerHTML = ''
    }
    const handleShippingUser = (event) => {
        event.preventDefault();
        shipping.classList = ' infoCheckout carts p-4'
        shipping.innerHTML = `
        <h3 className=''>Thanks For Check out : ${name} 💖 </h3>
        <h5>Name: ${nameS}</h5>
        <h5>Phone: ${phone}</h5>
        <h5>Address: ${address}</h5>
        <h5> Feedback: ${textArea}</h5>
        `

    }
    return (
        <div className="container-fluid bg-checkout my-5">
            <div className='py-4 checkout-container_main container'>
                <h2 className=' text-center my-5 login-title'> Checkout Information </h2>
                <div className="row checkout-contain">
                    <div className="col-md-6 col-12 checkout_container ">
                        <Form onSubmit={handleShippingUser} className=''>

                            <input onBlur={handleName} name='text' type="text" placeholder="Name" required />

                            <input value={user?.email} className='text-dark' type="email" readOnly name='email' />

                            <input onBlur={handlePhone} type="number" name='phone' placeholder='Number' />

                            <input onBlur={handleAddress} type="text" name='address' placeholder='Address' /> <br />
                            <label htmlFor="text">Your message</label>
                            <textarea className='textarea form-control w-100' onBlur={handleTextarea} name="textarea" id="textarea" cols="30" rows="4" placeholder='Drop your message here ...'></textarea> <br />
                            <Button className='btn btn-outline-light' variant='dark' type="submit">
                                Add Check Out
                            </Button>
                            <Button onClick={resetall} className=' btn btn-outline-light ' variant='dark' type="reset" value="Reset All"> Reset All</Button>
                            <br /> <br />

                        </Form>
                    </div>
                    <div className='col-md-6 col-12'>

                        <div id="checkoutinfo">


                        </div>
                    </div>
                </div>


            </div >
        </div>
    );
};

export default CheckOutInfo;