import React from "react";
import classes from "./logo.module.css";

const logo = () => {
  return (
    <div className={classes.logo_Container}>
      <div className={classes.logo_Wrapper}>
        <h1>Malik.</h1>
      </div>
    </div>
  );
};

export default logo;
