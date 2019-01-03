import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  render() {
    return (
      <div>
        <div id="heading-breadcrumbs">
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap">
              <div className="col-md-7">
                <h1 className="h2">회원가입</h1>
              </div>
              <div className="col-md-5">
                <ul className="breadcrumb d-flex justify-content-end">
                  <li className="breadcrumb-item">
                    <a href="index.html">홈</a>
                  </li>
                  <li className="breadcrumb-item active">회원가입</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="box">
                  <form action="customer-orders.html" method="get">
                    <div className="form-group">
                      <label htmlFor="name-login">Name</label>
                      <input
                        id="name-login"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email-login">Email</label>
                      <input
                        id="email-login"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password-login">Password</label>
                      <input
                        id="password-login"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-template-outlined"
                      >
                        <i className="fa fa-user-md" /> Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default Register;
