import React, { useState } from "react";
import Logo from "../logo/logo";
import Nav from "../Nav/Nav";
import classes from "./Header.module.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.header_Container}>
      <header className={classes.header_Wrapper}>
        <Logo />
        <Nav toggle={toggle} />
        <div onClick={() => setToggle(!toggle)} className={classes.hamburger}>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
        </div>
      </header>
    </div>
  );
};

export default Header;
