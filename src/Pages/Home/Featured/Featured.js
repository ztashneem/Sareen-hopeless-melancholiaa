import React from 'react';

const Featured = () => {
    return (
        <div className="container-fluid featured-bg py-lg-4">
            <div className='container my-5 pt-lg-5  '>
                <div className="row">
                    <div className="col-md-6 col-12">
                    <iframe className='w-100' height="315" src="https://www.youtube.com/embed/V6ui161NyTg?start=9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className='fw-bold mb-3'>How I've helped</h2>
                        <p>"I experienced tremendous growth in my 1+ year with the service, and I would come back again...If you are honest with your therapist, you can see great breakthroughs and tips to learn and grow as a person.". </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;