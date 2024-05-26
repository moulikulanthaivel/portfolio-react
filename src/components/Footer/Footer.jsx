import React from 'react'
import "./Footer.css"
import footer_icon from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"


const Footer = () => {
  return (
    <div id='Footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_icon} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat a ratione, ea illum porro assumenda numquam modi inventore. Deleniti, similique!</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
    <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="footer-bottom-right">
                <p>Terms of services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer