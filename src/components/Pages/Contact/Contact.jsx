import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contact_Container}>
      <div className={classes.contact_Wrapper}>
        <h2>Contact Me</h2>
        <p>Interested to work with me?</p>
        <a href="mailto:">Send me an email</a>
        <p>
          I'm currently looking to join a team of creative designers and
          developers.
        </p>
      </div>
    </div>
  );
};

export default Contact;
