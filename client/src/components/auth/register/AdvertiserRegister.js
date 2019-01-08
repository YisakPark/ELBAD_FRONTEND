import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import TextFieldGroup from "../../common/TextFieldGroup";
import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";

class AdvertiserRegister extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      user_type: "advertiser",
      email: "",
      name: "",
      password: "",
      password2: "",
      meeting_region: "",
      cell_phone_number: "",
      company_name: "",
      company_introduction: "",
      company_homepage: "",
      company_photo: "",
      company_type: ""
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
      user_type: this.state.user_type,

      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
      meeting_region: this.state.meeting_region,
      cell_phone_number: this.state.cell_phone_number,
      company_name: this.state.company_name,
      company_introduction: this.state.company_introduction,
      company_homepage: this.state.company_homepage,
      company_photo: this.state.company_photo,
      company_type: this.state
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div id="heading-breadcrumbs">
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap">
              <div className="col-md-7">
                <h1 className="h2">광고주 회원가입</h1>
              </div>
              <div className="col-md-5">
                <ul className="breadcrumb d-flex justify-content-end">
                  <li className="breadcrumb-item">
                    <a href="index.html">홈</a>
                  </li>
                  <li className="breadcrumb-item active">회원가입</li>
                  <li className="breadcrumb-item active">광고주 회원가입</li>
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
                  <small className="d-block pb-3">* = 필수 기입 항목</small>
                  <form noValidate onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      label="*성명"
                      placeholder="성명"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      error={errors.name}
                      id="register_name"
                    />
                    <TextFieldGroup
                      label="*이메일"
                      placeholder="이메일"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                      id="register_email"
                    />
                    <TextFieldGroup
                      label="*비밀번호"
                      placeholder="비밀번호"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                      id="register_password"
                    />
                    <TextFieldGroup
                      label="*비밀번호확인"
                      placeholder="비밀번호확인"
                      name="password2"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                      id="register_password2"
                    />
                    <TextFieldGroup
                      label="*미팅가능지역"
                      placeholder="미팅가능지역"
                      name="meeting_region"
                      value={this.state.meeting_region}
                      onChange={this.onChange}
                      error={errors.meeting_region}
                      id="register_meeting_region"
                    />
                    <TextFieldGroup
                      label="*핸드폰번호"
                      placeholder="핸드폰번호"
                      name="cell_phone_number"
                      value={this.state.cell_phone_number}
                      onChange={this.onChange}
                      error={errors.cell_phone_number}
                      id="register_cell_phone_number"
                    />
                    <TextFieldGroup
                      label="*회사명"
                      placeholder="회사명"
                      name="company_name"
                      value={this.state.company_name}
                      onChange={this.onChange}
                      error={errors.company_name}
                      id="register_company_name"
                    />
                    <TextAreaFieldGroup
                      label="*회사 소개"
                      placeholder="회사 소개"
                      name="bio"
                      value={this.state.company_introduction}
                      onChange={this.onChange}
                      error={errors.company_introduction}
                      id="register_company_introduction"
                    />
                    <TextFieldGroup
                      label="회사 홈페이지"
                      placeholder="회사 홈페이지"
                      name="company_homepage"
                      value={this.state.company_homepage}
                      onChange={this.onChange}
                      error={errors.company_homepage}
                      id="register_company_homepage"
                    />
                    {/*
                    TODO: Photo upload
                    <TextFieldGroup
                      label="회사 프로필 사진"
                      placeholder="회사 프로필 사진"
                      name="company_photo"
                      value={this.state.company_photo}
                      onChange={this.onChange}
                      error={errors.company_photo}
                      id="register_company_photo"
                    />*/}
                    {/*
                    TODO: Dropdown
                    <TextFieldGroup
                      label="*사업자 유형"
                      placeholder="사업자 유형"
                      name="company_type"
                      value={this.state.creator_photo}
                      onChange={this.onChange}
                      error={errors.creator_photo}
                      id="register_creator_photo"
                    />*/}
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
        </div>
      </div>
    );
  }
}

AdvertiserRegister.propTypes = {
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
)(withRouter(AdvertiserRegister));
