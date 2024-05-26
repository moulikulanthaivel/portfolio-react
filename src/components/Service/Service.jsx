import React from 'react'
import "./Service.css"
import patternTheme from "../../assets/theme_pattern.svg"
import Services_Data from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div id='Services' className='services'>
        <div className="service-title">
            <h1>My Service</h1>
            <img src={patternTheme} alt="" />
        </div>
        <div className="service-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className='service-format'>
                    <h2>{service.s_no} </h2>
                    <h1>{service.s_name} </h1>
                    <p>{service.s_desc} 
                    </p> <div className="service-readmore">
                <h2 className='read-more    '>Read more</h2>
                <img src={arrow} alt="" />
            </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Service