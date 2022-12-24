import React from 'react'
import './Join.css'


const Join = () => {
  
  return (
    <div className='join'>
        <div className='join-left'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US ?</span>
            </div>
        </div>
        <div className='join-right'>

           
            <form  className="email" >
                <input type="email" name='user_email' placeholder='Enter Email' required />
                <button className='btnn btn-j'>Join us</button>
            </form>
        </div>
    </div>
  )
}

export default Join