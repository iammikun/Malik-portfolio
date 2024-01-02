import React from "react";
import classes from "./About.module.css";
import Skills from "../../Skills/Skills";
import Experience from "../../Experience/Experience";

const About = () => {
  return (
    <div className={classes.about_Container}>
      <div className={classes.about_Wrapper}>
        <h2>About ME</h2>
        <p>
          Hey there👋! Welcome to my website portfolio. I'm Malik Sogbaike, a
          skilled front-end web developer with a year of coding experience. I'm
          passionate about creating stunnung websites that not only look great
          but also provide an exceptional user experience. In the second
          semester, i'm eager to expand my programming knowledge and collaborate
          with other talented web developers to take on exciting projects. Let's
          join forces and create something truly remarkable together. Explore my
          portfolio and let's connect!🌟💻
        </p>
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default About;
