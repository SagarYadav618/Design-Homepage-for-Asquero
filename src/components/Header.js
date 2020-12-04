import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Asquero Believe</h3>
            <h1>KNOW MORE GROW MORE</h1>
            <p>
              Our goal is to improve the quality of Online Education for everyone We aim to provide an unbiased platform for learners to discover the best sources to learn a new skills
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
