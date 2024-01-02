import React from "react";
import Logo from "../logo/logo";
import Nav from "../nav/nav";
import classes from "./header.module.css";

const header = () => {
  return (
    <div className={classes.header_Container}>
      <div className={classes.header_Wrapper}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
};

export default header;
