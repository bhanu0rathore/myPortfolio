import React from 'react';
import logo from '../images/signature.png'
import { Link } from 'react-router-dom';


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
            <Link to='/'>Home </Link></li>
            <li>
              <Link to='/About'>About Me</Link> 
              </li>
            <li>
            <Link to='/resume'>Resume</Link>
            </li>
            <li>
            <Link to='/contacts'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='col-2 '>
        <div className='socialIcon'>
            <span className='scsl-mn'><a href='https://www.facebook.com/' target='_block'><i className="fa-brands fa-facebook-f"></i></a></span>
            <span className='scsl-mn'><a href='https://www.twitter.com' target='_block'><i className="fa-brands fa-twitter"></i></a></span>
            <span className='scsl-mn' ><a href='https://www.instagram.com/the_bhanurathore_officiall' target='_block'><i className="fa-brands fa-instagram"></i></a></span>
            <span className='scsl-mn' ><a href='https://www.linkedin.com/in/bhanu-rathore-929a78218' target='_block'><i className="fa-brands fa-linkedin-in"></i></a></span>
        </div>
      </div>


    </div>


    </div>
  )
}

export default nav;
