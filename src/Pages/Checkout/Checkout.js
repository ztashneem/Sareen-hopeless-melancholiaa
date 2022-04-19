import React from 'react';
import { useParams } from 'react-router-dom';
import pakege from '../../images/photoghraper/pakeges.png';
import { BsArrowRightCircleFill } from 'react-icons/bs'
import './Checkout.css'
import CheckOutInfo from './CheckOutInfo';

const Checkout = () => {
    const { name } = useParams();

    return (
        <div className="container-fluid bg-photghraper py-2">
            <div className='container mx-auto text-center '>
                <div className="row mt-5 cards">
                    <div className="col-md-5 col-12 p-lg-5">
                        <h2 className='fw-bold'>Congratulations on your <br /> {name} </h2>
                        <h5>Overused marketing phrases <BsArrowRightCircleFill className='ms-2 fw-bold'></BsArrowRightCircleFill> </h5>

                    </div>
                    <div className="col-md-7 col-12 mt-2 p-lg-2">
                        <p className='mission'>
                            <li> Our mission is to / We are dedicated to / We put a strong emphasis</li>

                            <li>With a passion for / We are passionate about / We believe</li>

                            <li>Make your dreams a reality / Bring your vision to life / Dream wedding</li>

                            <li>Make things as easy as possible / As stress-free as possible </li>

                            <li>Go the extra mile/Go above and beyond/Take it to the next level</li>
                            <li>Best day ever / Once-in-a-lifetime</li>
                            <li>Represent who you are / Reflect you as a couple </li>
                            <li> Perfect day / Special day / Best day of your life </li>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-12">
                        <CheckOutInfo>
                            <h3 className=''>Thanks For Check out : {name} 💖 </h3>
                        </CheckOutInfo>
                    </div>
                </div>
                <div className="row text-center">

                    <div className="img-fluid col-md-12 col-12">
                        <img src={pakege} className='img-fluid imgs' alt="" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Checkout;