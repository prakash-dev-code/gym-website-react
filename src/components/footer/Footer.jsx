import React from 'react'
import './Footer.css'
import Logo from '../../assets/nav_logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
           <div className='footer-box'>
           <div className='footer-a'>
                <span><i class="fab fa-instagram"></i></span>
                <span><i class="fab fa-youtube"></i></span>
                <span><i class="fab fa-facebook"></i></span>
            </div>
            <div className='footer-b'>
                <img src={Logo} alt="" />
            </div>
           </div>
           <div className='blur blur-a'></div>
           <div className='blur blur-b'></div>
        </div>

    )
}

export default Footer