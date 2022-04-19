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
                        <h3>slide- 1 </h3>
                        <p>“I need you like a heart needs a beat.” – Unknown</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block imgs  w-100 img-fluid"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>slide-2</h3>
                        <p>“If I know what love is, it is because of you.” – Hermann Hesse</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imgs  w-100 img-fluid"
                        src={banner3}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3 className="d-none imgs d-sm-block d-md-block d-lg-block">slid-3</h3>
                        <p>“You call it madness, but I call it love.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;