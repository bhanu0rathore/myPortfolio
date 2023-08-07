import React from 'react';
import ProgressBar from './progress';
import Pdf from '../customLoader/BhanuResume.pdf';


const Resume = () => {
   

  return (
    <div className='container'>

   
      
      <div className='row'>
          <div className='col-12'>
            <div className='main-pageHeadings' data-aos = "fade-left" data-aos-duration="800" data-aos-offset="100" data-aos-easing="ease-in-sine">
              <h1 className='pageHead' >Resume</h1>
            </div>
              
          </div>
            
            
      </div> 

      <div className='row'>
            <div className='col-12'>
                <div className='sub-Head'>
                    <h4>My Skills</h4>
                </div>
            </div>
      </div>

        <div className='row'>
            <div className='col-7'>
            <div className='row'>
            
            <div className='col-6' data-aos="fade-up">
                    <ProgressBar
                        label="HTML"
                        visualParts={[
                        {
                            percentage: "100%",
                            color: "#8b343e"
                        }
                        ]}
                    />
            </div>
            <div className='col-6' data-aos="fade-up">
                    <ProgressBar
                        label="CSS"
                        visualParts={[
                        {
                            percentage: "98%",
                            color: "#8b343e"
                        }
                        ]}
                    />
            </div>
      </div>

      <div className='row'>
            <div className='col-6' data-aos="fade-up">
                    <ProgressBar
                        label="BOOTSTRAP 4&5"
                        visualParts={[
                        {
                            percentage: "95%",
                            color: "#8b343e"
                        }
                        ]}
                    />
            </div>
            <div className='col-6' data-aos="fade-up">
                    <ProgressBar
                        label="JAVASCRIPT"
                        visualParts={[
                        {
                            percentage: "68%",
                            color: "#8b343e"
                        }
                        ]}
                    />
            </div>
      </div>

      <div className='row'>
            <div className='col-6' data-aos="fade-up">
                    <ProgressBar
                        label="jQUERY"
                        visualParts={[
                        {
                            percentage: "85%",
                            color: "#8b343e"
                        }
                        ]}
                    />
            </div>
            <div className='col-6' data-aos="fade-up">
                    <ProgressBar
                        label="REACT JS"
                        visualParts={[
                        {
                            percentage: "60%",
                            color: "#8b343e"
                        }
                        ]}
                    />
            </div>
      </div>

      <div className='row'>
            <div className='col-6'>
                    <ProgressBar
                        label="REACT NATIVE"
                        visualParts={[
                        {
                            percentage: "60%",
                            color: "#8b343e"
                        }
                        ]}
                    />
            </div>
            <div className='col-6'>
                    <ProgressBar
                        label="GIT"
                        visualParts={[
                        {
                            percentage: "60%",
                            color: "#8b343e"
                        }
                        ]}
                    />
            </div>
        </div>
    </div>

            <div className='col-5 position-relative'>
                <a target='_blank' rel="noreferrer" href={Pdf} ><button className=' rsum-dwnld-btn  p-2'  > <span><i className="fa-solid fa-download"></i></span> Download CV</button></a>
                <div className='skill-icon-box'>

                    <div className='skill-icn-inrBx skill-icn-One'>
                        <i className="fa-brands fa-html5" data-aos="zoom-in-down"></i>
                    </div>

                    <div className='skill-icn-inrBx skill-icn-Two'>
                        <i className="fa-brands fa-css3-alt" data-aos="zoom-in-down"></i>
                    </div>

                </div>

                <div className='skill-icon-box'>
                    
                    <div className='skill-icn-inrBx skill-icn-Three'>
                        <i className="fa-brands fa-bootstrap" data-aos="zoom-in-down"></i>
                    </div>

                    <div className='skill-icn-inrBx skill-icn-Four'>
                        <i className="fa-brands fa-react" data-aos="zoom-in-down"></i>
                    </div>

                </div>


            </div>


        </div>

     

    </div>
  )
}

export default Resume;
