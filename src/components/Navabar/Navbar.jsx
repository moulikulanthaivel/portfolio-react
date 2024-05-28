import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import logo from  "../../assets/logo.svg"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {

const [menu,setMenu] = useState("Home")

const menuRef = useRef();

const openMenu = ()=>{
  menuRef.current.style.right = "0"
}


const closeMenu = ()=>{
  menuRef.current.style.left = "-350px"
}

  return (
    <div className="navbar">
        <img src={logo}  alt=""  className='logo'/>
        <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="" />
        <ul ref={menuRef} className="navbar-menu">
        <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="" />          
         <li> <AnchorLink className='anchor-link' offset={50} href='#Home'> <p  onClick={()=>{setMenu("Home")}}> Home</p> {menu === "Home" ? <img src={underline} alt="" /> : <></> } </AnchorLink> </li>
         <li> <AnchorLink className='anchor-link' offset={50} href='#About'> <p  onClick={()=>{setMenu("About")}}>  About</p> {menu === "About" ? <img src={underline} alt="" /> : <></> } </AnchorLink></li>  
         <li><AnchorLink className='anchor-link' offset={50} href='#Services'><p  onClick={()=>{setMenu("Services")}}> Services</p> {menu === "Services" ? <img src={underline} alt="" /> : <></> } </AnchorLink></li>  
         <li><AnchorLink className='anchor-link' offset={50} href='#Portfolio' > <p  onClick={()=>{setMenu("Portfolio")}}> Portfolio </p>{menu === "Portfolio" ? <img src={underline} alt="" /> : <></> }    </AnchorLink></li>  
         <li><AnchorLink className='anchor-link' offset={50} href='#Contact'> <p onClick={()=>{setMenu("Contact")}}>Contact</p>{menu === "Contact" ? <img src={underline} alt="" /> : <></> }    </AnchorLink></li> 
        </ul>
        <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#Contact'> Connect with me </AnchorLink>
        </div>
    </div>
  )
}

export default Navbar