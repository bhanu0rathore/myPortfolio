import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MainImg from '../images/imgHeader.png';  

const Header = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the home page when the component mounts
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    Aos.init();
  
  }, [])
  

  return (
    <div className=' container headerMain'>
      <div className='row'>
        <div className='col-12'>
          <div className='main-inner-header d-flex align-items-center'>

            <div className='headerHeading ' data-aos = "fade-right" data-aos-duration="800" data-aos-offset="100" data-aos-easing="ease-in-sine">
              <h5>Hi there!</h5>
              <h1>I'm <span>Bhanu Rathore.</span></h1>
              <h1>I'm a <span>Frontend Developer.</span></h1>
              <p>Experienced frontend developer with a knack for creating polished and visually alluring web interfaces. Proficient in HTML, CSS, and JavaScript, transforming designs into seamless user experiences.</p>
            </div>
            <div className='pictureMain'  data-aos = "fade-left" data-aos-duration="800" data-aos-offset="100" data-aos-easing="ease-in-sine">
              <img src={MainImg} alt='logoImg'  />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;

