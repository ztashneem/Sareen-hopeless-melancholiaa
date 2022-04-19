import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="container-fluid ">
            <div className='container rowsd my-5'>
                <h1 className='mb-5 text-center fw-bold'>WHAT SERVICES I PROVIDE? </h1>
                <div className="row">
                    <div className='services-container'>
                        {
                            services.map(singleService => <Service key={singleService.id}
                                singleService={singleService}></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;