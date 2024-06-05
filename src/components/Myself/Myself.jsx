import React from 'react'
import "./Myself.css"
import themepattern from "../../assets/theme_pattern.svg"
import mouli from "../../assets/fullpic.png"

const Myself = () => {
  return (
    <div id='About' className='myself'>

        <div className="myself-title">
            <h1>About me</h1>
            <img src={themepattern} alt="" />
        </div>
       
        <div className="myself-sections">
            <div className="myself-left">
                <img src={mouli} style={{width:"550px"}} alt="" />
            </div>
            <div className="myself-right">
                <div className="myself-para">
                    <p>Highly motivated frontend developer seeking internship or entry-level position to apply and enhance skills in web
development, user interface design, and front-end technologies.Eager to contribute to a dynamic team and gain
hands-on experience in a professional environment.</p>
                     {/* <p>Loremsamus perspiciatis aut tenet, quis doloremque voluptas ea corporis sat dolor voluptatum blanditiis est earum qu vel sat dolor voluptatum blantotam eaquetotam eaque ipsat dolor voluptatum blanditiis est earum q ipsat dolor voluptatum blanditiis est earum qditiis est earum qudolore. Dr.</p> */}

                </div>
                <div className="myself-skills">
                    <div className="myself-skill"><p>HTML & CSS</p> <hr style={{width:"60%"}} /></div>
                    <div className="myself-skill"><p>JavaSript</p> <hr style={{width:"70%"}} /></div>
                    <div className="myself-skill"><p>React JS</p> <hr style={{width:"65%"}} /></div>
                    <div className="myself-skill"><p>Node Js</p> <hr style={{width:"40%"}} /></div>
                    <div className="myself-skill"><p>Mongo DB</p> <hr style={{width:"50%"}} /></div>
                    <div className="myself-skill"><p>git , github </p> <hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Myself