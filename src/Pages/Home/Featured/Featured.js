import React from 'react';

const Featured = () => {
    return (
        <div className="container-fluid featured-bg py-lg-4">
            <div className='container my-5 pt-lg-5  '>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <iframe className='w-100' height="315" src="https://www.youtube.com/embed/JNKZN8uq1H8?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className='fw-bold mb-3'>FEATURED WEDDING</h2>
                        <p>Writing with punch and personality is the best way to highlight your unique voice and offering. But there are a number of common phrases that can creep into your wedding business marketing because you’ve come across them so often – and so have your potential clients! The last thing you want is for couples to feel like they’ve heard it all before, so skip these overused words and give your pitch an instant lift. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;