import React from "react";
import { Link } from "react-router-dom";
import classes from "./nav.module.css";

const nav = () => {
  return (
    <div className={classes.nav_Container}>
      <nav className={classes.nav_Wrapper}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default nav;
