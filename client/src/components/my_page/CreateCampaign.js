import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import MiddleBar from "./../common/MiddleBar";
import classnames from "classnames";
import isEmpty from "../../validation/is-empty";

class CreateCampaign extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      campaign_type: [],
      product_type: "",
      product_URL: "",
      product_photo: "",
      campaign_title: "",
      campaign_purpose: "",
      gender: "",
      ages: []
    };

    this.onChangeCampaignType = this.onChangeCampaignType.bind(this);
    this.onChangeAges = this.onChangeAges.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeCampaignType(e) {
    let new_state;
    if (this.state.campaign_type.includes(e.target.value)) {
      //element is unchecked
      new_state = this.state.campaign_type.filter(
        val => val !== e.target.value
      );
      this.setState({ campaign_type: new_state });
      return;
    } else {
      //element is checked
      this.setState({
        campaign_type: [...this.state.campaign_type, e.target.value]
      });
      return;
    }
  }

  onChangeAges(e) {
    let new_state;
    if (this.state.ages.includes(e.target.value)) {
      //element is unchecked
      new_state = this.state.ages.filter(val => val !== e.target.value);
      this.setState({ ages: new_state });
      return;
    } else {
      //element is checked
      this.setState({
        ages: [...this.state.ages, e.target.value]
      });
      return;
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { errors } = this.state;
    const nav_link_style = showBorder => {
      if (showBorder)
        return {
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "solid 1px"
        };
      else
        return {
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        };
    };

    const padding_left_1 = {
      paddingLeft: "85px"
    };

    const margin_left_1 = {
      marginLeft: "-30px"
    };

    const margin_left_2 = {
      marginLeft: "86px"
    };

    const margin_top_1 = {
      marginTop: "10px"
    };

    const margin_top_2 = {
      marginTop: "15px"
    };

    const font_size_up = {
      fontSize: "120%"
    };

    return (
      <div>
        <MiddleBar content="캠페인 만들기" />
        <section className="bar">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <SideBar
                  user_type={this.props.auth.user.user_type}
                  create_campaign={true}
                />
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-3">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        className="nav-link active create_campaign"
                        id="v-pills-1"
                        data-toggle="pill"
                        href="#v-pills-home"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                        style={nav_link_style(true)}
                      >
                        1. 영상 종류 선택
                      </a>
                      <a
                        className="nav-link create_campaign"
                        id="v-pills-2"
                        data-toggle="pill"
                        href="#v-pills-profile"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                        style={nav_link_style(true)}
                      >
                        2. 제품/서비스 설명
                      </a>
                      <a
                        className="nav-link create_campaign"
                        id="v-pills-3"
                        data-toggle="pill"
                        href="#v-pills-messages"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                        style={nav_link_style(true)}
                      >
                        3. 캠페인 세부사항
                      </a>
                      <a
                        className="nav-link create_campaign"
                        id="v-pills-4"
                        data-toggle="pill"
                        href="#v-pills-settings"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                        style={nav_link_style()}
                      >
                        4. 확인 및 게시
                      </a>
                    </div>
                  </div>
                  <div className="col-9">
                    <div
                      className="tab-content"
                      id="v-pills-tabContent"
                      style={{
                        height: "400px",
                        border: "none"
                      }}
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-1"
                        style={{
                          height: "100%"
                        }}
                      >
                        <div className="row" style={{ height: "10%" }} />
                        <div
                          className="row"
                          style={{
                            height: "20%"
                          }}
                        >
                          <div
                            className="col-md-12 d-flex align-items-center"
                            style={font_size_up}
                          >
                            <span className="custom_bold">영상</span>
                            {"\u00A0"}
                            종류 선택
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            height: "60%"
                          }}
                        >
                          <div className="custom-control custom-checkbox  offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="video_type_check1"
                              value="리뷰"
                              onChange={this.onChangeCampaignType}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="video_type_check1"
                            >
                              리뷰
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox  offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="video_type_check2"
                              value="튜토리얼"
                              onChange={this.onChangeCampaignType}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="video_type_check2"
                            >
                              튜토리얼
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="video_type_check3"
                              value="게임 플레이"
                              onChange={this.onChangeCampaignType}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="video_type_check3"
                            >
                              게임 플레이
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="video_type_check4"
                              value="추천"
                              onChange={this.onChangeCampaignType}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="video_type_check4"
                            >
                              추천
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="video_type_check5"
                              value="하울"
                              onChange={this.onChangeCampaignType}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="video_type_check5"
                            >
                              하울
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="video_type_check6"
                              value="언급"
                              onChange={this.onChangeCampaignType}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="video_type_check6"
                            >
                              언급
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="video_type_check7"
                              value="흥미 위주"
                              onChange={this.onChangeCampaignType}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="video_type_check7"
                            >
                              흥미 위주
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="video_type_check8"
                              value="언박싱"
                              onChange={this.onChangeCampaignType}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="video_type_check8"
                            >
                              언박싱
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-2"
                        style={{
                          height: "100%"
                        }}
                      >
                        <div className="row" style={{ height: "20%" }}>
                          <div
                            className="col-md-12 d-flex align-items-center"
                            style={font_size_up}
                          >
                            제품 / 서비스 {"\u00A0"}
                            <span className="custom_bold">종류</span>
                          </div>
                        </div>
                        <div className="row" style={{ height: "40%" }}>
                          <div className="custom-control custom-checkbox  offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <div className="col-md-1" />
                            <input
                              type="radio"
                              name="product_type"
                              className="custom-control-input"
                              id="product_type_check1"
                              value="테크/앱"
                              onChange={this.onChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="product_type_check1"
                            >
                              테크 / 앱
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox  offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="radio"
                              name="product_type"
                              className="custom-control-input"
                              id="product_type_check2"
                              value="헬스/건강"
                              onChange={this.onChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="product_type_check2"
                            >
                              헬스 / 건강
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox  offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <div className="col-md-1" />
                            <input
                              type="radio"
                              name="product_type"
                              className="custom-control-input"
                              id="product_type_check3"
                              value="게임"
                              onChange={this.onChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="product_type_check3"
                            >
                              게임
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox  offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="radio"
                              name="product_type"
                              className="custom-control-input"
                              id="product_type_check4"
                              value="뷰티/미용"
                              onChange={this.onChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="product_type_check4"
                            >
                              뷰티 / 미용
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox  offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <div className="col-md-1" />
                            <input
                              type="radio"
                              name="product_type"
                              className="custom-control-input"
                              id="product_type_check5"
                              value="유아"
                              onChange={this.onChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="product_type_check5"
                            >
                              유아
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox  offset-md-1 col-md-5 d-flex align-items-center justify-content-start">
                            <input
                              type="radio"
                              name="product_type"
                              className="custom-control-input"
                              id="product_type_check6"
                              value="기타"
                              onChange={this.onChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="product_type_check6"
                            >
                              기타
                            </label>
                          </div>
                        </div>
                        <div className="row" style={{ height: "20%" }}>
                          <div
                            className="col-md-12 d-flex align-items-center"
                            style={font_size_up}
                          >
                            제품 / 서비스 {"\u00A0"}
                            <span className="custom_bold">상세정보</span>
                          </div>
                        </div>
                        <div className="row" style={{ height: "20%" }}>
                          <div
                            className="offset-md-1 col-md-2 d-flex align-items-center justify-content-start"
                            style={{ padding: "0px" }}
                          >
                            <div className="col-md-1" />
                            <label>URL</label>
                          </div>
                          <div className="input-group col-md-9">
                            <input
                              type="text"
                              maxLength="140"
                              className="form-control custom_input"
                              name="product_URL"
                              value={this.state.product_URL}
                              onChange={this.onChange}
                              style={{ height: "80%" }}
                            />
                          </div>
                          <div
                            className="offset-md-1 col-md-2 d-flex align-items-center justify-content-start"
                            style={{ padding: "0px" }}
                          >
                            <div className="col-md-1" />
                            <label>사진</label>
                          </div>
                          <div className="input-group col-md-9 d-flex align-items-center justify-content-start">
                            <button className="custom_button">첨부</button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-3"
                        style={{
                          height: "100%"
                        }}
                      >
                        <div className="row" style={{ height: "20%" }}>
                          <div
                            className="col-md-12 d-flex align-items-center"
                            style={font_size_up}
                          >
                            본 {"\u00A0"}
                            <span className="custom_bold">캠페인</span>에 대한
                            설명
                          </div>
                        </div>
                        <div className="row" style={{ height: "40%" }}>
                          <div
                            className="col-md-4 d-flex align-items-center"
                            style={padding_left_1}
                          >
                            <label>캠페인 제목</label>
                          </div>
                          <div
                            className="input-group col-md-8"
                            style={margin_left_1}
                          >
                            <input
                              type="text"
                              maxLength="140"
                              className="form-control custom_input"
                              name="campaign_title"
                              value={this.state.campaign_title}
                              onChange={this.onChange}
                            />
                          </div>
                          <div
                            className="col-md-4 d-flex align-items-center"
                            style={padding_left_1}
                          >
                            <label>캠페인 목적</label>
                          </div>
                          <div
                            className="input-group col-md-8"
                            style={margin_left_1}
                          >
                            <input
                              type="text"
                              maxLength="140"
                              className="form-control custom_input"
                              name="campaign_purpose"
                              value={this.state.campaign_purpose}
                              onChange={this.onChange}
                            />
                          </div>
                          <div
                            className="col-md-10 d-flex align-items-center"
                            style={padding_left_1}
                          >
                            <label>캠페인 대상 시청자</label>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ height: "40%", marginTop: "10px" }}
                        >
                          <div
                            className="custom-control custom-checkbox col-md-3 d-flex align-items-center"
                            style={margin_left_2}
                          >
                            <input
                              type="radio"
                              name="gender"
                              className="custom-control-input"
                              id="detail_check1"
                              value="남성"
                              onChange={this.onChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="detail_check1"
                            >
                              남성
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox col-md-3 d-flex align-items-center">
                            <input
                              type="radio"
                              name="gender"
                              className="custom-control-input"
                              id="detail_check2"
                              value="여성"
                              onChange={this.onChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="detail_check2"
                            >
                              여성
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox col-md-3 d-flex align-items-center">
                            <input
                              type="radio"
                              name="gender"
                              className="custom-control-input"
                              id="detail_check3"
                              value="무관"
                              onChange={this.onChange}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="detail_check3"
                            >
                              무관
                            </label>
                          </div>

                          <div
                            className="custom-control custom-checkbox col-md-3 d-flex align-items-center"
                            style={margin_left_2}
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="detail_check4"
                              name="ages"
                              onChange={this.onChangeAges}
                              value="13-17"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="detail_check4"
                            >
                              13-17
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox col-md-3 d-flex align-items-center">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="detail_check5"
                              name="ages"
                              onChange={this.onChangeAges}
                              value="18-24"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="detail_check5"
                            >
                              18-24
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox col-md-3 d-flex align-items-center">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="detail_check6"
                              name="ages"
                              onChange={this.onChangeAges}
                              value="25-34"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="detail_check6"
                            >
                              25-34
                            </label>
                          </div>
                          <div
                            className="custom-control custom-checkbox col-md-3 d-flex align-items-center"
                            style={margin_left_2}
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="detail_check7"
                              name="ages"
                              onChange={this.onChangeAges}
                              value="35-49"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="detail_check7"
                            >
                              35-49
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox col-md-3 d-flex align-items-center">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="detail_check8"
                              name="ages"
                              onChange={this.onChangeAges}
                              value="50-64"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="detail_check8"
                            >
                              50-64
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox col-md-3 d-flex align-items-center">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="detail_check9"
                              name="ages"
                              onChange={this.onChangeAges}
                              value="65+"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="detail_check9"
                            >
                              65+
                            </label>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-4"
                        style={{
                          height: "100%"
                        }}
                      >
                        <div
                          className="row"
                          style={{ ...margin_top_2, height: "25%" }}
                        >
                          <div
                            className="col-md-3 custom_bold"
                            style={font_size_up}
                          >
                            영상
                          </div>
                          <div className="col-md-9" style={font_size_up}>
                            {this.state.campaign_type.join(", ")}
                          </div>
                        </div>
                        <div className="row" style={{ height: "15%" }}>
                          <div
                            className="col-md-3 custom_bold"
                            style={font_size_up}
                          >
                            캠페인
                          </div>
                          <div className="col-md-9" style={font_size_up}>
                            {this.state.campaign_title}
                          </div>
                        </div>
                        <div className="row" style={{ height: "15%" }}>
                          <div
                            className="offset-md-3 col-md-9"
                            style={font_size_up}
                          >
                            {this.state.gender +
                              " " +
                              this.state.ages.join(", ")}
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ height: "15%", marginTop: "13px" }}
                        >
                          <div
                            className="col-md-3 custom_bold"
                            style={font_size_up}
                          >
                            제품/서비스
                          </div>
                          <div className="col-md-9" style={font_size_up}>
                            {this.state.product_URL}
                          </div>
                        </div>
                        <div className="row" style={{ height: "15%" }}>
                          <div
                            className="offset-md-3 col-md-9"
                            style={font_size_up}
                          >
                            {this.state.product_type}
                          </div>
                        </div>
                        <div className="row float-right">
                          <button className="custom_button">게시</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

CreateCampaign.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(CreateCampaign));
