import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={classes.hero_Container}>
      <div className={classes.hero}>
        <div className={classes.hero_Wrapper}>
          <h1>Hi👋, i'm Malik Sogbaike.</h1>
          <h2>Frontend Developer</h2>
          <p>
            I'm a 19yrs old skilled front-end web developer. I'm passionate
            about creating stunning websites that not only look great but also
            provide an exceptional user experience.
          </p>
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
        <div className={classes.hero_Imghover}></div>
      </div>
    </div>
  );
};

export default Hero;
