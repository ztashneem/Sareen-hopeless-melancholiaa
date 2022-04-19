import React from 'react';
import photo from '../../../images/Banner/69.jpg'
const AboutMe = () => {
    return (
        <div className='container-fluid py-lg-5 pb-5 bg-dark'>
            <div className="row  py-lg-5  aboutme">
                <div className="col-md-4 "></div>

                <div className="col-md-4 col-12 py-lg-5 ">
                    <p className='abouts text-center'>
                        i have been trying to get into Software /Web Development sector for a long time but couldn't , because it is quite difficult to learn and maintain that consistency if you are learning alone . This Course helped me a lot to understand development process in web development and build real world projects which made my interviews easy and comfortable in future . Their support System is awesome . i would Highly recommend anyone about this course if he/she really wants to get into this sector and wiling to work hard for it
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