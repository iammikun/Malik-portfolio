import React from "react";
import Hero from "./Hero/Hero";
import classes from "./Home.module.css";
import About from "../About/About";

const Home = () => {
  return (
    <div className={classes.home_Container}>
      <div className={classes.home_Wrapper}>
        <Hero />
        <div className={classes.home_Abt}>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
