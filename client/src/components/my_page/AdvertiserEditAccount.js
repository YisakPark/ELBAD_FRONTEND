import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editUser, getUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectFieldGroup from "../common/SelectFieldGroup";
import isEmpty from "../../validation/is-empty";

class EditAccount extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      user_type: "advertiser",
      name: "",
      password: "",
      password2: "",
      meeting_region: "",
      cell_phone_number: "",
      company_name: "",
      company_introduction: "",
      company_homepage: "",
      company_photo: "",
      company_type: "",
      imagePreviewUrl: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange_img = this.onChange_img.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.auth.profile) {
      const profile = nextProps.auth.profile;

      // If profile field doesnt exist, make empty string
      profile.name = !isEmpty(profile.name) ? profile.name : "";
      profile.meeting_region = !isEmpty(profile.meeting_region)
        ? profile.meeting_region
        : "";
      profile.cell_phone_number = !isEmpty(profile.cell_phone_number)
        ? profile.cell_phone_number
        : "";
      profile.company_name = !isEmpty(profile.company_name)
        ? profile.company_name
        : "";
      profile.company_introduction = !isEmpty(profile.company_introduction)
        ? profile.company_introduction
        : "";
      profile.company_hompage = !isEmpty(profile.company_hompage)
        ? profile.company_hompage
        : "";
      profile.company_photo = !isEmpty(profile.company_photo)
        ? profile.company_photo
        : "";
      profile.company_type = !isEmpty(profile.company_type)
        ? profile.company_type
        : "";

      // Set component fields state
      this.setState({
        name: profile.name,
        meeting_region: profile.meeting_region,
        cell_phone_number: profile.cell_phone_number,
        company_name: profile.company_name,
        company_introduction: profile.company_introduction,
        company_homepage: profile.company_homepage,
        company_photo: profile.company_photo,
        company_type: profile.company_type
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChange_img(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        company_photo: file,
        imagePreviewUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    const newUser = {
      user_type: this.state.user_type,

      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
      meeting_region: this.state.meeting_region,
      cell_phone_number: this.state.cell_phone_number,
      company_name: this.state.company_name,
      company_introduction: this.state.company_introduction,
      company_homepage: this.state.company_homepage,
      company_photo: this.state.company_photo,
      company_type: this.state.company_type
    };

    this.props.editUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl)
      $imagePreview = (
        <img src={imagePreviewUrl} className="img-thumbnail img-fluid" />
      );

    return (
      <div>
        <div id="heading-breadcrumbs">
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap middle_bar">
              <div className="col-md-7">
                <h1 className="h2">내 정보 수정</h1>
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
                      placeholder="성명"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      error={errors.name}
                      id="register_name"
                    />
                    <TextFieldGroup
                      placeholder="비밀번호"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                      id="register_password"
                    />
                    <TextFieldGroup
                      placeholder="비밀번호확인"
                      name="password2"
                      type="password"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                      id="register_password2"
                    />
                    <TextFieldGroup
                      placeholder="미팅가능지역"
                      name="meeting_region"
                      value={this.state.meeting_region}
                      onChange={this.onChange}
                      error={errors.meeting_region}
                      id="register_meeting_region"
                    />
                    <TextFieldGroup
                      placeholder="핸드폰번호"
                      name="cell_phone_number"
                      value={this.state.cell_phone_number}
                      onChange={this.onChange}
                      error={errors.cell_phone_number}
                      id="register_cell_phone_number"
                    />
                    <TextFieldGroup
                      placeholder="회사명"
                      name="company_name"
                      value={this.state.company_name}
                      onChange={this.onChange}
                      error={errors.company_name}
                      id="register_company_name"
                    />
                    <TextAreaFieldGroup
                      placeholder="회사 소개"
                      name="company_introduction"
                      value={this.state.company_introduction}
                      onChange={this.onChange}
                      error={errors.company_introduction}
                      id="register_company_introduction"
                    />
                    <TextFieldGroup
                      label="회사 홈페이지"
                      placeholder="회사 홈페이지"
                      서
                      name="company_homepage"
                      value={this.state.company_homepage}
                      onChange={this.onChange}
                      error={errors.company_homepage}
                      id="register_company_homepage"
                    />
                    <SelectFieldGroup
                      label="사업자 유형"
                      name="company_type"
                      placeholder="사업자 유형을 선택하세요"
                      selected_value={this.state.company_type}
                      values={[
                        "corporate_business",
                        "individual_business",
                        "free_lancer"
                      ]}
                      contents={["법인사업자", "개인사업자", "프리랜서"]}
                      onChange={this.onChange}
                      error={errors.company_type}
                      id="register_company_type"
                    />
                    <div className="mb-4 form-group">
                      <label htmlFor="register_company_photo">
                        프로필 사진
                      </label>
                      <div className="input-group mb-3">
                        <div className="custom-file mr-2">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="register_company_photo"
                            aria-describedby="inputGroupFileAddon01"
                            onChange={this.onChange_img}
                            accept="image/x-png,image/gif,image/jpeg"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="inputGroupFile01"
                          >
                            사진을 선택하세요
                          </label>
                        </div>
                        <div>
                          {/* div for image preview */}
                          {$imagePreview}
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-template-outlined"
                      >
                        <i className="fa fa-user-md" /> 수정
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

EditAccount.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { editUser, getUser }
)(withRouter(EditAccount));
