import React from 'react'
import "./Mywork.css"
import theme from "../../assets/theme_pattern.svg"
import Mywork_Data from "../../assets/mywork_data" 
import arrowIcon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='Portfolio' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme} alt="" />
        </div>
        <div className="mywork-container">
            {Mywork_Data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
          <p>Show more</p>
          <img src={arrowIcon} alt="" />
        </div>
        
    </div>
  )
}

export default Mywork