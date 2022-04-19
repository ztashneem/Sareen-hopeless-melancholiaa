
import React from 'react';
import { Card } from 'react-bootstrap';
import hover1 from '../../../images/photoghraper/hover-1.png';
import hover2 from '../../../images/photoghraper/hover-2.png';
import hover3 from '../../../images/photoghraper/hover-3.png';
import img1 from '../../../images/photoghraper/storie-1.png';
import img2 from '../../../images/photoghraper/storie-2.png';
import img3 from '../../../images/photoghraper/storie-3.png';
import './Stories.css'

const Stories = () => {
    return (
        <div className='container my-2'>
            <div className="row my-5 text-uppercase">
                <h3 className='mt-3 text-center fw-bold'>Analytics and Research</h3>
                <p className='text-center mb-5'>I study industries, competitors and consumers. I collect and analyze data to make reasoned decisions.</p>
                <div className="col-md-4 col-12 posiion_container text-uppercase">
                    <Card className='cards2 cardimg'>
                        <Card.Img className='img-fluid imgs  cards2' variant="top" src={img1} />
                        <Card.Img src={hover2} className="img-top img-fluid imgs  cards2" alt="Card Front"></Card.Img>
                        <Card.Body>
                            <Card.Title className='text-center'>Focus</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 col-12 posiion_container">
                    <Card className='cards2 cardimg'>
                        <Card.Img className='img-fluid imgs  cards2' variant="top" src={img2} />
                        <Card.Img src={hover1} className="img-top img-fluid imgs cards2" alt="Card Front"></Card.Img>
                        <Card.Body>
                            <Card.Title className='text-center'>On-demand</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 col-12 posiion_container">
                    <Card className='cards2 cardimg'>
                        <Card.Img className='img-fluid imgs cards2' variant="top" src={img3} />
                        <Card.Img src={hover3} className="img-top img-fluid imgs  cards2" alt="Card Front"></Card.Img>
                        <Card.Body>
                            <Card.Title className='text-center'>Communication</Card.Title>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Stories;