import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import sampleProfileImage from "../../img/download.jpeg";

class Topbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="btn-group">
        <a
          className="login-btn btn dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={sampleProfileImage}
            alt=""
            className="rounded-circle img-fluid topbar_profile_photo"
          />
        </a>
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item topbar_drop_down_item">
            내 캠페인
          </a>
          <a href="#" className="dropdown-item topbar_drop_down_item">
            관심 캠페인/크리에이터
          </a>
          <Link
            to={
              user.user_type === "advertiser"
                ? "edit_account_advertiser"
                : "edit_account_creator"
            }
            className="dropdown-item topbar_drop_down_item"
          >
            내 정보 수정
          </Link>
          <a href="#" className="dropdown-item topbar_drop_down_item">
            포인트 충전
          </a>
          <a
            href="#"
            className="dropdown-item topbar_drop_down_item"
            onClick={this.onLogoutClick.bind(this)}
          >
            로그아웃
          </a>
        </div>
      </div>
    );

    const guestLinks = (
      <div>
        <Link to="/login" className="login-btn">
          <i className="fa fa-sign-in" />
          <span className="d-none d-md-inline-block">로그인</span>
        </Link>
        <Link to="/register" className="signup-btn">
          <i className="fa fa-user" />
          <span className="d-none d-md-inline-block signup-btn">회원가입</span>
        </Link>
      </div>
    );

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
                  {isAuthenticated ? authLinks : guestLinks}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Topbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Topbar);
