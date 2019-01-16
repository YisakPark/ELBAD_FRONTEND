import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class GetYoutubeChannel extends Component {
  componentDidMount() {
    window.gapi_load();
  }

  onClick(e) {
    e.preventDefault();
    window.get_youtube_channel_detail(localStorage.getItem("jwtToken"));
  }

  render() {
    return (
      <div>
        <div id="heading-breadcrumbs">
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap">
              <div className="col-md-7">
                <h1 className="h2">유투브 채널 정보 불러오기</h1>
              </div>
              <div className="col-md-5">
                <ul className="breadcrumb d-flex justify-content-end">
                  <li className="breadcrumb-item">
                    <a href="index.html">홈</a>
                  </li>
                  <li className="breadcrumb-item active">마이페이지</li>
                  <li className="breadcrumb-item active">
                    유투브 채널 정보 불러오기
                  </li>
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
                  <div className="text-center mb-4">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={this.onClick}
                    >
                      <i className="fa fa-youtube-play" /> 유투브 채널 상세정보
                      불러들이기
                    </button>
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

GetYoutubeChannel.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(GetYoutubeChannel));
