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
                <div className="login">
                  <Link to="/" className="login-btn">
                    <i className="fa fa-sign-in" />
                    <span className="d-none d-md-inline-block">로그인</span>
                  </Link>
                  <Link to="/register" className="signup-btn">
                    <i className="fa fa-user" />
                    <span className="d-none d-md-inline-block signup-btn">
                      회원가입
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
