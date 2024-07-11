import React from "react";

const Footer = ({handleSubmit,style = {}}) => {
  return (
    <div className="footer" style={style}>
      <div>
        <p>
          <span style={{ color: "grey" }}>Need Help? </span>
          <b>Call 9999999999</b>
        </p>
      </div>
      <div>
        <button className="submit" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;
