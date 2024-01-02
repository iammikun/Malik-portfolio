import React from "react";
import { Link } from "react-router-dom";
import classes from "./nav.module.css";

const Nav = ({ toggle }) => {
  return (
    <div className={classes.nav_Container}>
      <div className={!toggle ? classes.navContainer : classes.showNav}>
        <nav className={classes.nav_Wrapper}>
          <ul className={classes.leftNavLinks}>
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
    </div>
  );
};

export default Nav;
