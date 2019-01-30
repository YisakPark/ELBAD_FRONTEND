import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import MiddleBar from "../common/MiddleBar";

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
        <MiddleBar content="로그인" />
        <div id="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="box">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        id="login_email"
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.email
                        })}
                        placeholder="이메일"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group mt-5">
                      <input
                        id="login_password"
                        type="password"
                        className={classnames("form-control", {
                          "is-invalid": errors.password
                        })}
                        placeholder="비밀번호"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="text-center mt-5">
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
