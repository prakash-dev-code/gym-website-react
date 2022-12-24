import React from 'react'
import './Testimonials.css'
import Test1 from '../../assets/test1.jpg'
import Left from '../../assets/left.png'
import Right from '../../assets/right.png'
import {motion} from 'framer-motion'


const Testimonials = () => {
    const transition = { type: "spring", duration: 3};
  return (
    <div className='testimonials'>
        <div className="testimonials-left-side">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>Say about us</span>

            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit rem laborum simil</span>
            <span >
                <span style={{color:'var(--orange)'}}>
                    Lamart
                </span>- Coach
            </span>
         
           
            


        </div>
        <div className="testimonials-right-side">
            <motion.div
            initial={{ opacity:0, x:-100 }}
            transition={{ ...transition, duration: 2}}
            whileInView={{ opacity: 1, x: 0}}
            ></motion.div>

             <motion.div
            initial={{ opacity:0, x: 100 }}
            transition={{ ...transition, duration: 2}}
            whileInView={{ opacity: 1, x: 0}}
            ></motion.div>
           
            <img src={Test1} alt="" />

            <div className='arrow'>
                <img src={Left} alt="" />
                <img src={Right} alt="" />
            </div>
        </div>


      
    </div>

    // 
   
    //  

  )
}

export default Testimonials