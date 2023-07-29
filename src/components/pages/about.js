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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
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
