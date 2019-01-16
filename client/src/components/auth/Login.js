import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div id="heading-breadcrumbs">
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap">
              <div className="col-md-7">
                <h1 className="h2">로그인</h1>
              </div>
              <div className="col-md-5">
                <ul className="breadcrumb d-flex justify-content-end">
                  <li className="breadcrumb-item">
                    <a href="index.html">홈</a>
                  </li>
                  <li className="breadcrumb-item active">로그인</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="box">
                  <form noValidate onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="이메일"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                      id="login_email"
                    />
                    <TextFieldGroup
                      placeholder="비밀번호"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                      id="login_password"
                    />
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-template-outlined"
                      >
                        <i className="fa fa-user-md" /> 로그인
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
