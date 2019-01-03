import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topbar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 d-md-block d-none">
              <p>Contact Information</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end justify-content-between">
                <ul className="list-inline contact-info d-block d-md-none">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-phone" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
                <div className="login">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login-modal"
                    className="login-btn"
                  >
                    <i className="fa fa-sign-in" />
                    <span className="d-none d-md-inline-block">로그인</span>
                  </a>
                  <Link to="/register" className="signup-btn">
                    <i className="fa fa-user" />
                    <span className="d-none d-md-inline-block signup-btn">
                      회원가입
                    </span>
                  </Link>
                </div>
                <ul className="social-custom list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
