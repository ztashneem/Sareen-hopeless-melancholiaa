import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/Banner/banner1.jpg';
import banner2 from '../../images/Banner/banner4.jpg';
import banner3 from '../../images/Banner/banner3.jpg';

const Banner = () => {
    return (
        <div id='banner'>
            <Carousel>
                <Carousel.Item interval={1000}>
                <img
                        className="d-block imgs  w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>JOURNALING </h3>
                        <p>Journaling allows you to remove any negative emotions from your head and get them down on paper, releasing them from your mind.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block imgs  w-100 img-fluid"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>MINDFULNESS</h3>
                        <p>Mindfulness is a type of meditation that allows you to be fully present and aware of what is happening inside you and around you – Hermann Hesse</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imgs  w-100 img-fluid"
                        src={banner3}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3 className="d-none imgs d-sm-block d-md-block d-lg-block">EXERCISE</h3>
                        <p>Use your exercise time as a way to focus and relieve stress. This means no multi-tasking!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;