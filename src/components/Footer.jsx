import React from "react";
import "./style/Footer.css";

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className="Footer" style={props.s}>
        <p> Cybernadero webpage 🌺</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
