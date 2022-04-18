import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/Banner/banner1.jpg'
import banner2 from '../../images/Banner/banner3.jpg'
import banner3 from '../../images/Banner/banner4.jpg'



const Banner = () => {
    return (
        <div id='banner'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block imgs w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                   
                    <Carousel.Caption>
                        <h3>Mental Health Awareness</h3>
                        <p>We believe the world needs a mental health boost.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <img
                        className="d-block imgs w-100 img-fluid"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>A Bit Of An Intro</h3>
                        <p>We need everything we can get our hands on to help bust through the stigma surrounding mental health.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block imgs w-100 img-fluid"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Please Welcome To The Stage</h3>
                        <p>We gain the confidence that it is OK to need and seek out help the best lives </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;