import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ singleService }) => {

    const navigate = useNavigate();
    const navigateToServiceDetails = (name) => {
        navigate(`/checkout/${name}`)
    }

    const { id, name, img, description, price } = singleService;
    return (
        <div >
            <Card className='cards'>
                <Card.Img onClick={() => navigateToServiceDetails(name)} className='img-fluid imgs cards' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 115) + '...'}
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>

                    <button className="cta" onClick={() => navigateToServiceDetails(name)}>
                        <span>Checkout</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;