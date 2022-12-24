import React from 'react'
import './Program.css';

const Program = () => {
  return (
    <div className='Programs' id='programs'>
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>

      </div>

      <div className='program-categories'>


        <div className='program-content'>
          <span className='program-icon'><i class="fas fa-dumbbell"></i></span>
          <span className='program-heading'>Strength Training</span>
          <span className='program-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
          <span className='program-join-now'>Join Now</span>
        </div>

        <div className='program-content'>
          <span className='program-icon'><i class="fas fa-running"></i></span>
          <span className='program-heading'>Cardio Training</span>
          <span className='program-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
          <span className='program-join-now'>Join Now </span>
        </div>

        <div className='program-content'>
          <span className='program-icon'><i class="fas fa-fire-alt"></i></span>
          <span className='program-heading'>Fat Burning</span>
          <span className='program-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
          <span className='program-join-now'>Join Now</span>
        </div>

        <div className='program-content'>
          <span className='program-icon'><i class="fas fa-heart"></i></span>
          <span className='program-heading'>Health Fitness</span>
          <span className='program-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
          <span className='program-join-now'>Join Now</span>
        </div>

       

      </div>
    </div>
  )
}

export default Program