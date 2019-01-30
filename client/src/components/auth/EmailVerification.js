import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MiddleBar from "../common/MiddleBar";
import classnames from "classnames";
import { verifyEmail } from "../../actions/authActions";

class EmailVerification extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      verification_code: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const code = {
      verification_code: this.state.verification_code
    };

    this.props.verifyEmail(code, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <MiddleBar content="이메일 인증" />
        <div id="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group mt-5">
                    <input
                      type="text"
                      className={classnames("form-control", {
                        "is-invalid": errors.verification_code
                      })}
                      placeholder="인증코드"
                      name="verification_code"
                      value={this.state.verification_code}
                      onChange={this.onChange}
                    />
                    {errors.verification_code && (
                      <div className="invalid-feedback">
                        {errors.verification_code}
                      </div>
                    )}
                  </div>
                  <div className="text-center mt-5">
                    <button type="submit" className="btn btn-template-outlined">
                      <i className="fa fa-user-md" /> 완료
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EmailVerification.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { verifyEmail }
)(withRouter(EmailVerification));
