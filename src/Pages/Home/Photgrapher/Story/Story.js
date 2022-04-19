import React from 'react';

const Story = () => {
    return (
        <div className='container-fluid bg-story'>
  <div className='container bg-story'>
            <div className="row my-5 justify-content-between align-items-center">
                <div className="col-md-1 col-12"></div>
                <div className="col-md-5 col-12">
                    <h3 className='  fw-bold mb-3'>MANAGE YOUR MENTAL HEALTH</h3>
                    <p>
                    Your health is your most valuable asset. If you don’t have your health, everything else in life falls to the wayside. We hosted a webinar back in May to talk all things stress management and mental wellness, from which we’ve compiled some tips for how to recognize when you or others may need help, how to manage your mental health and tools to help you get started with your mental health journey, so you can better prioritize your mental wellness now and in the future.
                    </p>

                    <br />
                    <p>
                    As your mental health affects how you approach your day, it’s important to manage it as best you can. Here are some ways to manage your mental health and tools to help you succeed.
                    </p>
                </div>
                <div className=" col-md-5 col-12 text-center ">
                    <img style={{ width: '380px', heigth: '400px' }} className='img-fluid imgs' src={`https://chicagorealtor-12462.kxcdn.com/wp-content/uploads/2020/10/mentalwellness_articleCR.jpg`} alt="" />
                </div>
                <div className="col-md-1 col-12"></div>
            </div>
        </div>
        </div>
      
    );
};

export default Story;