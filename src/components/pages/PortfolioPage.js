import React from 'react'

const PortfolioPage = () => {
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-12'>
          <div
            className='main-pageHeadings'
            data-aos='fade-left'
            data-aos-duration='800'
            data-aos-offset='100'
            data-aos-easing='ease-in-sine'
          >
            <h1 className='pageHead'>Portfolio</h1>
          </div>
        </div>
      </div>

        <div className='row'>
            <div className='col-6'>
                <div className='boxes-port'>
                    <h1>Boxes</h1>
                </div>
            </div>

            <div className='col-6'>
                <div className='Projects-Files'>
                    <h1>Projects</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioPage