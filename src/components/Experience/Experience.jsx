import React from "react";
import classes from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={classes.experience_Container}>
      <div className={classes.experience_Wrapper}>
        <h4>Experience</h4>
        <p>
          - I have completed projects that have allowed me to apply my
          programming skill during my course work.
        </p>
        <p>
          - I have been involved in open-source projects where i have contibuted
          to the development of softwares.
        </p>
        <p>
          - I have had the opportunity to work on research and academic
          projects.
        </p>
        <div className={classes.pro_Content}>
          <h4>Proficiency Levels</h4>
          <p>
            {" "}
            I'm a Software Engineer from Nigeria 🇳🇬, and i would say i'm at an
            Intermediate level. I'm pretty comfortable with the core concepts of
            programming and can handle moderately complex projects.
          </p>
          <a href="/">
            <button>Check out my Works</button>
          </a>
        </div>
        <div className={classes.project}>
          <h4>Projects planned for the second semester</h4>
          <p>
            I want to build a dynamic and interactive website using HTML, CSS,
            and JavaScript. It could be something like a personal portfolio or a
            blog with cool and interesting features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
