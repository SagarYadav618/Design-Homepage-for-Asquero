import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/1.png" alt="Sagar" />
              </div>
              <h1 className="price__heading">Html</h1>
              <p className="price__text">
                Hyper Text Markup Language HTML is the standard markup language for creating Web pages
              </p>
              <p className="price_rs">$20.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/2.png" alt="Sagar" />
              </div>
              <h1 className="price__heading">React</h1>
              <p className="price__text">
              React is a JavaScript library created by Facebook React is a User Interface (UI) library React is a tool for building UI 

              </p>
              <p className="price_rs">$35.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/3.png" alt="Sagar" />
              </div>
              <h1 className="price__heading">Python</h1>
              <p className="price__text">
              Python is an interpreted, object-oriented, high-level programming language with dynamic semantics 
              </p>
              <p className="price_rs">$50.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/4.png" alt="Sagar" />
              </div>
              <h1 className="price__heading">Firebase</h1>
              <p className="price__text">
              Firebase is a platform developed by Google for creating mobile and web applications
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/5.png" alt="Sagar" />
              </div>
              <h1 className="price__heading">Sql</h1>
              <p className="price__text">
              SQL stands for Structured Query Language SQL lets you access and manipulate databases 
              
              </p>
              <p className="price_rs">$29.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/6.png" alt="Sagar" />
              </div>
              <h1 className="price__heading">NodeJS</h1>
              <p className="price__text">
              Nodejs is an open-source, cross-platform, back-end, JavaScript runtime environment 
              </p>
              <p className="price_rs">$25.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
