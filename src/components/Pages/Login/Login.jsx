import React from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={classes.login_Container}>
      <form
        className={classes.login_Wrapper}
        action="mailto:"
        // onClick="submit"
        id="login"
      >
        <input type="text" placeholder="Full Name" required />
        <div className={classes.flexForm}>
          <input type="text" placeholder="Email" required />
          <input type="text" placeholder="Phone" required />
        </div>
        <Link to="mailto:">
          <button>SEND A MESSAGE</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
