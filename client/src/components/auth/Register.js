import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Register extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <div id="heading-breadcrumbs">
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap middle_bar">
              <div className="col-md-7">
                <h1 className="h2">회원가입</h1>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="box">
                  <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                      <Link to="/register_advertiser">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          광고주
                        </button>
                      </Link>
                    </div>
                    <div className="col-md-6 text-center">
                      <Link to="/register_creator">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          크리에이터
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Register));
