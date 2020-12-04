import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            {/* <h3>About Us</h3> */}
            <h1> Asquero Specialties </h1>
            <p>
            Data Science, Machine Learning, Python Programming, and Statistics We aim to provide an unbiased platform for learners to discover the best sources to learn a new skill Asquero lets learners identify the most suitable course of their choice by allowing them to filter courses by fee, course type (video/ebook, etc.), spoken language, course reviews, etc.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/7.jpg" alt="Sagar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
