import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import isEmpty from "../../validation/is-empty";

class Landing extends Component {
  render() {
    const { verified } = this.props.auth.user;
    const show_verified_info =
      this.props.location.state && this.props.location.state.show_verified_info
        ? this.props.location.state.show_verified_info
        : false;
    return (
      <div>
        <div className="container">
          <div className="row">
            {show_verified_info && (
              <div className="col-md-12 text-center alert alert-success">
                이메일 인증이 완료되었습니다!
              </div>
            )}
            {verified === false && (
              <div className="col-md-12 text-center alert alert-danger">
                아직 이메일 인증이 되지 않았습니다! 링크를 눌러 이메일로 전송된
                인증코드를 입력하세요!
                <Link to="email_verification" className="ml-4">
                  인증코드 입력
                </Link>
              </div>
            )}
            <div className="col-md-12">
              <Typed
                strings={["크리에이터의", "브랜드의", "모두의"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
              <p> 미래를 맡기세요</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(Landing));
