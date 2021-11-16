import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_col">
        <h3>About Us</h3>
        <h5>Story</h5>
        <h5>Clients</h5>
        <h5>Testimonials</h5>
      </div>
      <div className="footer_col2">
        <h3>Services</h3>
        <h5>Marketing</h5>
        <h5>Consulting</h5>
        <h5>Development</h5>
        <h5>Design</h5>
      </div>
      <div className="footer_col3">
        <h3>Contact Us</h3>
        <h5>United States</h5>
        <h5>United Kingdom</h5>
        <h5>Australia</h5>
        <h5>Support</h5>
      </div>
      <div className="footer_col4">
        <h3 className="logo_design1">Social</h3>
        <div className="logo_design">
          <h5>Facebook</h5>
          <FacebookIcon />
        </div>
        <div className="logo_design2">
          <h5>Instargram</h5>
          <InstagramIcon />
        </div>
        <div className="logo_design3">
          <h5>Youtube</h5>
          <YouTubeIcon />
        </div>
        <div className="logo_design4">
          <h5>Twitter</h5>
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
