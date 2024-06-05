import React from "react";
import "./Aboutme.css";
import mouli from "../../assets/mouli.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Aboutme = () => {
  return (
    <div>
      <div id="Home" className="about">
        <img src={mouli} alt="" />
        <h1>
          Hello! <span>I'm Mouli</span> , a devoloper based in salem.
        </h1>
        <p>
          My name is Mouli , I'm a front-end devoloper from salem.I love to
          devoloping websites
        </p>
        <div className="about-action">
          <div className="connectme">
            <AnchorLink className="anchor-link" offset={50} href="#Contact">
              {" "}
              Connect with me{" "}
            </AnchorLink>
          </div>
          <a
            href="MouliCV.pdf"
            download="mouli_s_resume.pdf"
            className="myresume"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
