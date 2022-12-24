import React from 'react'
import './Plan.css'

const Plan = () => {
    return (
        <div className="plans-container" id='plan'>
            <div className='blur blur-p-a'></div>
            <div className='blur blur-p-b'></div>
            <div className="programs-header " style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>WITH US</span>
            </div>
            {/* palns card  */}

            <div className="plans">
                <div className="plan-box">

                   <div className="box-header">
                   <span className='box-header-icon'><i class="fas fa-heart"></i></span><span className="box-header-text">BASIC PLANS 5K</span>
                   </div>

                   <div className='box-content'> 
                   <span className='icon'><i class="fas fa-check"></i></span><span className='plan-box-text'>2 hours of exercise</span>
                   </div>

                   <div className='box-content'> 
                   <span className='icon'><i class="fas fa-check"></i></span><span className='plan-box-text'>Free consultation to coaches</span>
                   </div>

                   <div className='box-content'> 
                   <span className='icon'><i class="fas fa-check"></i></span><span className='plan-box-text'>Access to the Comunitiy</span>
                   </div>
                   <div className='box-content  arrow'> 
                   <span >See more benifits </span><span className='plan-box-text'><i class="fas fa-long-arrow-alt-right"></i></span>
                   </div>
                   <div className='card-bottom'>
                    <span className='card-bottom-text' >Join Now</span>
                   </div>

                </div>

                <div className="plan-box middle">

                   <div className="box-header">
                   <span className='box-header-icon'><i class="fas fa-crown"></i></span><span className="box-header-text">PRIME PLANS 10K</span>
                   </div>

                   <div className='box-content'> 
                   <span className='icon'><i class="fas fa-check"></i></span><span className='plan-box-text'>5 hours of exercise</span>
                   </div>

                   <div className='box-content'> 
                   <span className='icon'><i class="fas fa-check"></i></span><span className='plan-box-text'>Free consultation to coaches</span>
                   </div>

                   <div className='box-content'> 
                   <span className='icon'><i class="fas fa-check"></i></span><span className='plan-box-text'>Access to the minibar</span>
                   </div>
                   <div className='box-content arrow '> 
                   <span >See more benifits </span><span className='plan-box-text'><i class="fas fa-long-arrow-alt-right"></i></span>
                   </div>

                   <div className='card-bottom'>
                    <span className='card-bottom-text' >Join Now</span>
                   </div>

                </div>

                <div className="plan-box">

                   <div className="box-header">
                   <span className='box-header-icon'><i class="fas fa-dumbbell"></i></span><span className="box-header-text">PRO PLANS 15K</span>
                   </div>

                   <div className='box-content'> 
                   <span className='icon'><i class="fas fa-check"></i></span><span className='plan-box-text'>8 hours of exercise</span>
                   </div>

                   <div className='box-content'> 
                   <span className='icon'><i class="fas fa-check"></i></span><span className='plan-box-text'>Consultation to Private coache</span>
                   </div>

                   <div className='box-content'> 
                   <span className='icon'><i class="fas fa-check"></i></span><span className='plan-box-text'>Free Fitness Marchandises</span>
                   </div>

                   <div className='box-content  arrow'> 
                   <span >See more benifits </span><span className='plan-box-text'><i class="fas fa-long-arrow-alt-right"></i></span>
                   </div>

                   <div className='card-bottom'>
                    <span className='card-bottom-text' >Join Now</span>
                   </div>

                </div>


               
            </div>

        </div>
    )
}

export default Plan