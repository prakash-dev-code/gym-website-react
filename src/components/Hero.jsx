import React from 'react'
import Header from './header/Header';
import './Hero.css';
import Heart from '../assets/Heart.png';

import Calories from '../assets/calories.png';
import Main from '../assets/banner_main.png';
import NumberCounter from 'number-counter';
import {motion} from 'framer-motion'


const Hero = () => {

  const transition = {type: 'spring', duration : 3};
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='hero' id='home'>
      <div className='blur blur-h'></div>
      <div className='left-h'>
        <Header />

        {/* the add button  */}

        <div className='the-best-ad'>
          <motion.div 
          initial={{left: mobile? "178px": '238px'}}
          whileInView={{left: '8px'}}
          transition ={{...transition, type: 'tween'}}
               >
          </motion.div>
          <span>let your business online with us</span>

        </div>
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shapes </span>

            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>

          </div>
          <div >
            <span>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ea velit ratione unde iusto facere enim quam doloribus arch</span>

          </div>
        </div>

        {/* figure  */}
        <div className='figures'>
          <div>
            <span>
              <NumberCounter end={182} start={120} delay='4' preFix="+"/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span> <NumberCounter end={318} start={280} delay='4' preFix="+"/></span>
            <span>new client</span>
          </div>
          <div>
            <span> <NumberCounter end={42} start={10} delay='4' preFix="+"/></span>
            <span>local branches</span>
          </div>

        </div>

        {/* button  */}
        <div className='hero-button'>
          <button className="btn">Get Started </button>
           <button className="btn">Learn More</button>
        </div>

      </div>
      <div className='right-h'>
        <button className='btn'>Join today</button>
       
        <motion.div
        initial={{ right: "-1rem"}}
        whileInView={{ right: "4rem"}}
        transition={transition}
         className='heart-rate'>
          <img src={Heart}  alt="heart" />
         
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images  */}
        
        <img src={Main} className="hero-image" alt='' />

        {/* calories  */}

        <motion.div
          initial={{ right: '57rem'}}
          whileInView={{ right: '28rem'}}
          transition ={transition}
         className="calories">
          <img src={Calories} alt='' />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </motion.div>
       
      </div>

    </div>
  )
}

export default Hero