import React from "react";
import "./Aboutme.css";
import mouli from "../../assets/mouli.png";

const Aboutme = () => {
  return (
    <div>
      
      <div className="about">
      <img src={mouli} alt="" />
        <h1>Hello!  <span>I'm Mouli</span> , a devoloper based in salem.</h1>
        <p>
          My name is Mouli , I'm a front-end devoloper from salem.I love to
          devoloping websites
        </p>
        <div className="about-action">
          <div className="connectme">Connect with me</div>
          <div className="myresume">My resume</div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
