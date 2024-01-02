import React from "react";
import classes from "./footer.module.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    <footer className={classes.footer_Container}>
      <div className={classes.footer_Wrapper}>
        <div className={classes.divider_Line}></div>
        <div className={classes.fut_Footer}>
          <h1>Malik.</h1>
          <div className={classes.footer_Socials}>
            <Link to="">
              <FaInstagram />
            </Link>
            <Link to="">
              <FaTwitter />
            </Link>
            <Link to="">
              <FaFacebook />
            </Link>
            <Link to="">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <span>© 2024 Malik Sogbaike. All rights reserved.</span>
        <span>Built with react.js & css modules.</span>
      </div>
    </footer>
  );
};

export default footer;
