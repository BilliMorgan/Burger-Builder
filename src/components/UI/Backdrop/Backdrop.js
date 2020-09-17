import React from "react";
import classes from "./Backdrop.module.css"

const backdrops = (props) => (
  props.show ? <div className={classes.Backdrop}></div> : null
);

export default backdrops;