import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/7.jpg" alt="Sagar" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3> Courses</h3>
            <h1>Python</h1>
            <p>
            Python is an interpreted, object-oriented, high-level programming language with dynamic semantics
            </p>
            <br/>
            <h1>JavaScript</h1>
            <p>
            JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE COURCES
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
