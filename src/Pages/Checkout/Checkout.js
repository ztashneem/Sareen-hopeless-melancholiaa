import React from 'react';
import { useParams } from 'react-router-dom';
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
                           <li>
                           “The advice I’d give to somebody that’s silently struggling is, you don’t have to live that way. You don’t have to struggle in silence. You can be un-silent. You can live well with a mental health condition, as long as you open up to somebody about it, because it’s really important you share your experience with people so that you can get the help that you need.
                           </li>
                           <li>
                           “I found that with depression, one of the most important things you can realize is that you’re not alone. You’re not the first to go through it, you’re not gonna be the last to go through it,”
                           </li>
                           <li>
                           “There is hope, even when your brain tells you there isn’t.”
                           </li>
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
               


            </div>
        </div>
    );
};

export default Checkout;