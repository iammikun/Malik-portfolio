import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={classes.skills_Container}>
      <div className={classes.skills_Wrapper}>
        <h2>Skills</h2>
        <p>The list of technologies i've worked with.</p>
        <div className={classes.skills_Box}>
          <div className={classes.skills_Card}>
            <h4>HTML</h4>
          </div>
          <div className={classes.skills_Card}>
            <h4>CSS</h4>
          </div>
          <div className={classes.skills_Card}>
            <h4>JavaScript</h4>
          </div>
          <div className={classes.skills_Card}>
            <h4>SQL</h4>
          </div>
          <div className={classes.skills_Card}>
            <h4>react.Js</h4>
          </div>
          <div className={classes.skills_Card}>
            <h4>Git</h4>
          </div>
          <div className={classes.skills_Card}>
            <h4>Communication</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
