import React from 'react';
import newazPng from '../../../images/photoghraper/newaz.png';
import followPng from '../../../images/photoghraper/follow-save.png';
import info from '../../../images/photoghraper/intro.png';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiFlag } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { BsAward, BsAwardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Photoghraper = () => {
    return (
        <div className="container-fluid bg-photghraper">
            <div className="container">
                <div className=' row'>
                    <div className="col-md-2 my-4 d-none d-md-block d-sm-block ">
                        <img src={newazPng} className='img-fluid imgs' alt="" />
                    </div>
                    <div className="col-md-10 d-none d-md-block d-sm-block">
                        <div className="row mt-5 ">
                            <div className="col-md-7 col-12">
                                <h3>Photographer Shahriar Nabi Newaz
                                    <sup className='text-muted'>@snnp</sup> </h3>
                                <h6 className='text-muted'>Dhaka, Bangladesh </h6>
                                <p>Shahriar Nabi Newaz
                                    is an wedding photography & Cinematography farm that covering events all over the globe.</p>
                                <small>
                                    <span className='me-lg-3'> <AiOutlineClockCircle className='me-2'></AiOutlineClockCircle> 4 years on MyWed</span> <span> <FiFlag className='me-2'></FiFlag> I can speak english, bengali, hindi.</span>
                                </small>
                                <div className='d-flex mt-2'>

                                    <h6 className='py-2 awrad me-4'>
                                        <BsAward></BsAward>
                                        <BsAward></BsAward>
                                        <BsAwardFill className='text-warning'></BsAwardFill>
                                        <BsAwardFill className='text-danger'></BsAwardFill>
                                    </h6>
                                    <h6 className='best'>
                                        <small><AiFillStar className='me-1'></AiFillStar> Top 3 best wedding photographers in Bangladesh</small> <br />
                                        <small> <AiFillStar className='me-1'></AiFillStar>Top 3 best wedding photographers in Bangladesh</small>
                                    </h6>
                                </div>

                            </div>

                            <div className="col-md-5 col-12 ">
                                <Link to='/direct_message'>
                                    <img src={followPng} className='imgs img-fluid' alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row d-block d-lg-none d-md-none d-sm-none">
                    <div className="col-12">
                        <img src={info} className='imgs2 img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Photoghraper;