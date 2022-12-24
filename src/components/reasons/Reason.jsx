import React from 'react'
import './Reason.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';

const Reason = () => {
  return (
    <div className='reasons' id='reason'>
        <div className='left-r'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
             </div>
        <div className='right-r'>
            <span>Some reasons</span>

            <div>
                <span className='stroke-text'>why</span>
                <span> choose us ?</span>
            </div>

            <div className='details-r'>
              
              <div>
                <span><i class="fas fa-check-square"></i></span>
                <span>OVER 22+ EXPERT COACHES</span>
              </div>

              <div>
                <span><i class="fas fa-check-square"></i></span>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
              </div>

              <div>
                <span><i class="fas fa-check-square"></i></span>
                <span>DISCOUNT FOR  NEW MEMBER</span>
              </div>

              <div>
                <span><i class="fas fa-check-square"></i></span>
                <span>FRIENDLY ENVIORMENT</span>
              </div>

            </div>
        </div>

       
    </div>
  )
}

export default Reason