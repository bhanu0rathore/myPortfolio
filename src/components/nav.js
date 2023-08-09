import React from 'react';
import logo from '../images/signature.png';
import { NavLink } from 'react-router-dom';



  

const nav = () => {
  return (
    <div className='container'>

    <div className='row align-items-center'>
      <div className='col-3 '>
        <div className='logo'>
          <img src={logo} alt='logoImg'/>
        </div>
      </div>

      <div className='col-7'>
        <div className='navSec d-flex align-items-center'>
          <ul className='d-flex mb-0'>
          <li>
                <NavLink  to='/' activeclassname='activelink'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' activeclassname='activelink'>
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink to='/resume' activeclassname='activelink'>
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to='/contacts' activeclassname='activelink'>
                  Contact
                </NavLink>
              </li>
          </ul>
        </div>
      </div>

      <div className='col-2 '>
          <div className='socialIcon'>
            <a href="https://www.facebook.com/bhanurathore">
              <i className='fa-brands fa-facebook-f'></i>
            </a>
            <a href="https://twitter.com/i/flow/login">
              <i className='fa-brands fa-twitter'></i>
            </a>
            <a href="https://www.instagram.com/the_bhanurathore_officiall/">
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href="https://in.linkedin.com/">
              <i className='fa-brands fa-linkedin-in'></i>
            </a>
          </div>
      </div>


    </div>


    </div>
  )
}

export default nav;
