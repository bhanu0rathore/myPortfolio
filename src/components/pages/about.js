import React from 'react'

const About = () => {
  return (
    <div className='container mt-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='main-pageHeadings' data-aos = "fade-left" data-aos-duration="800" data-aos-offset="100" data-aos-easing="ease-in-sine">
              <h1 className='pageHead' >About Me</h1>
            </div>
              
          </div>
            <div className='col-8 mt-4'>
              
              
              <div className='aboutDetails' data-aos = "fade-right" data-aos-duration="800" data-aos-offset="100" data-aos-easing="ease-in-sine">
                  <h2>I'm <span>Bhanu Rathore</span>, a Web Developer</h2>
                  <p><b>P</b>assionate frontend developer dedicated to shaping the digital realm with creativity and precision. With expertise in HTML, CSS, and JavaScript, I specialize in weaving together captivating user interfaces that marry form with function. Every line of code I write is infused with a commitment to detail, user-centric design, and optimal performance. Beyond the screen, I'm a perpetual learner, always seeking inspiration from the latest industry trends to infuse fresh ideas into my work.</p>
                  <p>I'm an adept frontend developer weaving code and design to craft immersive digital experiences that resonate and captivate audiences. </p>
              </div>

            </div>
            <div className='col-4'>
                <div className='mydetails mt-5' data-aos="flip-left" data-aos-duration="800" data-aos-offset="100">
                    <ul>
                      <li>Name: <span>Bhanu Rathore</span></li>
                      <li>E-mail: <span><a href="mailto:bhanurthore22@gmail.com">bhanurthore22@gmail.com</a></span></li>
                      <li>Age: <span>23</span></li>
                      <li>From: <span>Jaipur,Rajsthan.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;
