import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContainerIn">
        <div className="menuContainer">
          <div className="addressContainer">
            <div className="addressHeader">Address</div>
            <div className="addressLine">
            بجوار سيتي ماكس, Al Sheikh Muhammad Ibn Manee, Mecca 24372, Saudi Arabia
            </div>
          </div>
          {/* <div className="serviceMenuContainer addressContainer">
            <div className="serviceHeader addressHeader">Services</div>
            <div className="serviceUl">
              <ul>
                <li>OverView</li>
                <li>Features</li>
                <li>Technology</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div> */}
          <div className="getInTouchContainer addressContainer">
            <div className="getInTouchHeader addressHeader">Get in Touch</div>
            <div className="getInTouchBottom">
              <div className="mail textin">kamransadiq772@gmail.com</div>
              <div className="number textin">+966560024315</div>
              <div className="iconsContainer textin">
                <FacebookIcon className="icon" />
                <LinkedInIcon className="icon"/>
                <TwitterIcon className="icon"/>
              </div>
            </div>
          </div>
          {/* <div className="supportContainer addressContainer">
            <div className="supportHeader addressHeader">We Support</div>
          </div> */}
        </div>
        <div className="copyRightContainer">Copyright 2021 آصف للتبريد</div>
      </div>
    </div>
  );
};

export default Footer;
