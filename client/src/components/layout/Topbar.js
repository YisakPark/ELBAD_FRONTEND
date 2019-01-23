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

    const guest_topbarStyle = {
      height: "25px"
    };

    const guest_rowStyle = {
      marginTop: "-8px"
    };

    const auth_topbarStyle = {
      height: "30px"
    };

    const auth_rowStyle = {
      marginTop: "-15px"
    };

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
        <div className="dropdown-menu" style={{ padding: "0px" }}>
          <a
            href="#"
            className="dropdown-item topbar_drop_down_item"
            style={{ borderBottom: "1px solid #eee" }}
          >
            내 캠페인
          </a>
          <a
            href="#"
            className="dropdown-item topbar_drop_down_item"
            style={{ borderBottom: "1px solid #eee" }}
          >
            관심 캠페인/크리에이터
          </a>
          <Link
            to={
              user.user_type === "advertiser"
                ? "edit_account_advertiser"
                : "edit_account_creator"
            }
            className="dropdown-item topbar_drop_down_item"
            style={{ borderBottom: "1px solid #eee" }}
          >
            내 정보 수정
          </Link>
          {user.user_type === "creator" ? (
            <Link
              to="get_youtube_channel"
              className="dropdown-item topbar_drop_down_item"
              style={{ borderBottom: "1px solid #eee" }}
            >
              유투브 채널 정보 불러오기
            </Link>
          ) : null}
          <a
            href="#"
            className="dropdown-item topbar_drop_down_item"
            style={{ borderBottom: "1px solid #eee" }}
          >
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
      <div
        className="top-bar"
        style={isAuthenticated ? auth_topbarStyle : guest_topbarStyle}
      >
        <div className="container">
          <div
            className="row d-flex align-items-center"
            style={isAuthenticated ? auth_rowStyle : guest_rowStyle}
          >
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
