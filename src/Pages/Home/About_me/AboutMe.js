import React from 'react';
import photo from '../../../images/Banner/69.jpg'
const AboutMe = () => {
    return (
        <div className='container-fluid py-lg-5 pb-5 bg-dark'>
            <div className="row  py-lg-5  aboutme">
                <div className="col-md-4 "></div>

                <div className="col-md-4 col-12 py-lg-5 ">
                    <p className='abouts text-center'>
                    Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings. To get an opportunity where I can make the best of my potential and contribute to the organization's growth.
                    </p>
                </div>
                <div className="col-md-2 col-12 margin py-lg-5">
                    <img className='img-fluid rounded-circle w-100' src={photo} alt="" />
                </div>
                <div className="col-md-2 "></div>
            </div>
            <div className='pb-3'>

            </div>
        </div>
    );
};

export default AboutMe;