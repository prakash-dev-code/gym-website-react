import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/nav_logo.png';
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
      <img className='logo' src={Logo} alt="Auspicious" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0px 5px",
            borderRadius: "5px",
            color: "#fff",
            fontSize: "35px",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpened(true)}
        ><span><i class="fas fa-bars"></i></span></div>
      ) : (
        <ul>


          <li> <Link
            onClick={() => setMenuOpened(false)}
            to='home'
            spy={true}
            smooth={true} >Home </Link></li>
          <li> <Link
            onClick={() => setMenuOpened(false)}
            to='programs'
            spy={true}
            smooth={true} >

            Program </Link></li>
          <li> <Link
            onClick={() => setMenuOpened(false)}
            to='reason'
            spy={true}
            smooth={true}

          >Why </Link></li>
          <li > <Link

            onClick={() => setMenuOpened(false)}
            to='plan'
            spy={true}
            smooth={true}

          >Plans</Link></li>
          <li>
            <Link onClick={() => setMenuOpened(false)}
              to='testimonials'
              spy={true}
              smooth={true} >
              Testimonials</Link>
          </li>
        </ul>
      )}

    </div>
  );
};

export default Header