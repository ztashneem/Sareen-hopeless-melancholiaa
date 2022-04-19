import React from 'react';

const Story = () => {
    return (
        <div className='container'>
            <div className="row my-5 justify-content-between align-items-center">
                <div className="col-md-1 col-12"></div>
                <div className="col-md-5 col-12">
                    <h3 className='  fw-bold mb-3'>MY STORY</h3>
                    <p>
                        Hi! I’m Shahriar Nabi Newaz, a wedding & portrait photographer. <br /> I would like to give you a unique photography experience, <br /> built to serve you best and capture your special moments <br /> for you and your families creatively and beautifully.
                    </p>

                    <br />
                    <p>
                        I am not the wedding photographer for couples looking for a fairy tale. I am not the wedding photographer for couples looking for a light and airy dreamscape or a day that feels like a photo shoot. I'm the wedding photographer for you if you value moments and the beauty of your everyday life.
                    </p>
                </div>
                <div className=" col-md-5 col-12 text-center ">
                    <img style={{ width: '380px', heigth: '400px' }} className='img-fluid imgs' src={`https://demos.elemisthemes.com/missio/style/images/art/about8.jpg`} alt="" />
                </div>
                <div className="col-md-1 col-12"></div>
            </div>
        </div>
    );
};

export default Story;