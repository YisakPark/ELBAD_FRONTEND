import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import isEmpty from "../../../validation/is-empty";
import MiddleBar from "../../common/MiddleBar";
import classnames from "classnames";
import {
  select_field_company_type,
  select_field_region,
  select_field_birthday
} from "../../common/SelectFieldValuesContents";

class AdvertiserRegister extends Component {
  constructor() {
    super();
    this.state = {
      next: false,
      errors: {},
      imagePreviewUrl: "",
      user_type: "advertiser",
      email_id: "",
      email_address: "",
      name: "",
      birth_year: "",
      birth_month: "",
      birth_date: "",
      password: "",
      password2: "",
      meeting_region: "",
      cell_phone_number1: "",
      cell_phone_number2: "",
      cell_phone_number3: "",
      company_name: "",
      company_introduction: "",
      company_homepage: "",
      company_photo: "",
      company_type: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange_img = this.onChange_img.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.showFileUpload = this.showFileUpload.bind(this);
    this.fileUpload = React.createRef();
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
      const errors = nextProps.errors;
      errors.name ||
      errors.email ||
      errors.cell_phone_number ||
      errors.birthday ||
      errors.password ||
      errors.password2
        ? this.setState({ next: false })
        : this.setState({ next: true });
    }
  }

  showFileUpload() {
    this.fileUpload.current.click();
  }

  handleNextClick(e) {
    e.preventDefault();

    this.setState({ next: !this.state.next });
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
        photo: file,
        imagePreviewUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const email = this.state.email_id + "@" + this.state.email_address;
    const cell_phone_number =
      this.state.cell_phone_number1 +
      this.state.cell_phone_number2 +
      this.state.cell_phone_number3;
    const birthday =
      isEmpty(this.state.birth_year) ||
      isEmpty(this.state.birth_month) ||
      isEmpty(this.state.birth_date)
        ? ""
        : this.state.birth_year +
          "." +
          this.state.birth_month +
          "." +
          this.state.birth_date;
    const formData = new FormData();

    formData.append("user_type", this.state.user_type);
    formData.append("email", email);
    formData.append("name", this.state.name);
    formData.append("birthday", birthday);
    formData.append("password", this.state.password);
    formData.append("password2", this.state.password2);
    formData.append("meeting_region", this.state.meeting_region);
    formData.append("cell_phone_number", cell_phone_number);
    formData.append("company_name", this.state.company_name);
    formData.append("company_type", this.state.company_type);
    formData.append("photo", this.state.photo);
    formData.append("company_introduction", this.state.company_introduction);

    this.props.registerUser(formData, this.props.history);
  }

  render() {
    const { errors, next } = this.state;
    const { imagePreviewUrl } = this.state;

    let $imagePreview = (
      <img
        style={{ height: "195px", width: "200px" }}
        className="img-thumbnail img-fluid"
      />
    );
    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          style={{ maxWidth: "200px" }}
          src={imagePreviewUrl}
          className="img-thumbnail img-fluid"
        />
      );
    }

    return (
      <div>
        <MiddleBar content="광고주 회원가입" />
        <div id="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="mt-5">
                  <form
                    noValidate
                    onSubmit={this.onSubmit}
                    style={{ marginTop: "80px" }}
                  >
                    {!next && (
                      <div>
                        <div className="form-group">
                          <input
                            type="text"
                            className={classnames("form-control", {
                              "is-invalid": errors.name
                            })}
                            placeholder="성명"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                          {errors.name && (
                            <div className="invalid_message">{errors.name}</div>
                          )}
                        </div>
                        <div className="form-group form-inline mt-5">
                          <input
                            type="text"
                            className={classnames("form-control col-md-5", {
                              "is-invalid": errors.email
                            })}
                            placeholder="이메일"
                            name="email_id"
                            value={this.state.email_id}
                            onChange={this.onChange}
                          />
                          <p
                            className="col-md-1 text-center"
                            style={{ marginTop: "15px" }}
                          >
                            @
                          </p>
                          <input
                            type="text"
                            className={classnames("form-control col-md-6", {
                              "is-invalid": errors.email
                            })}
                            name="email_address"
                            value={this.state.email_address}
                            onChange={this.onChange}
                          />
                          {errors.email && (
                            <div className="invalid_message">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group form-inline mt-5">
                          <input
                            type="text"
                            className={classnames("form-control col-md-2", {
                              "is-invalid": errors.cell_phone_number
                            })}
                            placeholder="휴대폰"
                            name="cell_phone_number1"
                            value={this.state.cell_phone_number1}
                            onChange={this.onChange}
                          />
                          <p
                            className="col-md-1 text-center"
                            style={{ marginTop: "15px" }}
                          >
                            -
                          </p>
                          <input
                            type="text"
                            className={classnames("form-control col-md-4", {
                              "is-invalid": errors.cell_phone_number
                            })}
                            name="cell_phone_number2"
                            value={this.state.cell_phone_number2}
                            onChange={this.onChange}
                          />
                          <p
                            className="col-md-1 text-center"
                            style={{ marginTop: "15px" }}
                          >
                            -
                          </p>
                          <input
                            type="text"
                            className={classnames("form-control  col-md-4", {
                              "is-invalid": errors.cell_phone_number
                            })}
                            name="cell_phone_number3"
                            value={this.state.cell_phone_number3}
                            onChange={this.onChange}
                          />
                          {errors.cell_phone_number && (
                            <div className="invalid_message">
                              {errors.cell_phone_number}
                            </div>
                          )}
                        </div>
                        <div className="form-group form-inline mt-5">
                          <select
                            className={classnames("form-control col-md-4", {
                              "is-invalid": errors.birthday
                            })}
                            name="birth_year"
                            onChange={this.onChange}
                            value={this.state.birth_year}
                          >
                            <option value="" key="0" defaultValue hidden>
                              출생년도
                            </option>
                            {select_field_birthday.year.values.map(
                              (value, index) => {
                                return (
                                  <option value={value} key={index + 1}>
                                    {select_field_birthday.year.contents[index]}
                                  </option>
                                );
                              }
                            )}
                          </select>

                          <p
                            className="col-md-1 text-center"
                            style={{ marginTop: "15px" }}
                          >
                            -
                          </p>

                          <select
                            className={classnames("form-control col-md-3", {
                              "is-invalid": errors.birthday
                            })}
                            name="birth_month"
                            onChange={this.onChange}
                            value={this.state.birth_month}
                          >
                            <option value="" key="0" defaultValue hidden>
                              월
                            </option>
                            {select_field_birthday.month.values.map(
                              (value, index) => {
                                return (
                                  <option value={value} key={index + 1}>
                                    {
                                      select_field_birthday.month.contents[
                                        index
                                      ]
                                    }
                                  </option>
                                );
                              }
                            )}
                          </select>

                          <p
                            className="col-md-1 text-center"
                            style={{ marginTop: "15px" }}
                          >
                            -
                          </p>

                          <select
                            className={classnames("form-control col-md-3", {
                              "is-invalid": errors.birthday
                            })}
                            name="birth_date"
                            onChange={this.onChange}
                            value={this.state.birth_date}
                          >
                            <option value="" key="0" defaultValue hidden>
                              일
                            </option>
                            {select_field_birthday.date.values.map(
                              (value, index) => {
                                return (
                                  <option value={value} key={index + 1}>
                                    {select_field_birthday.date.contents[index]}
                                  </option>
                                );
                              }
                            )}
                          </select>

                          {errors.birthday && (
                            <div className="invalid_message">
                              {errors.birthday}
                            </div>
                          )}
                        </div>

                        <div className="form-group form-inline mt-5">
                          <div className="col-md-6">
                            <div className="row">
                              <input
                                type="password"
                                className={classnames(
                                  "form-control col-md-11",
                                  {
                                    "is-invalid": errors.password
                                  }
                                )}
                                placeholder="비밀번호"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <input
                                type="password"
                                className={classnames(
                                  "form-control col-md-11 offset-md-1",
                                  {
                                    "is-invalid": errors.password2
                                  }
                                )}
                                placeholder="비밀번호확인"
                                name="password2"
                                value={this.state.password2}
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                          {errors.password && (
                            <div className="invalid_message">
                              {errors.password}
                            </div>
                          )}
                          {errors.password2 && (
                            <div className="invalid_message">
                              {errors.password2}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="row text-center">
                              <div className="col-md-12">{$imagePreview}</div>
                              <div className="col-md-12">
                                <input
                                  type="file"
                                  onChange={this.onChange_img}
                                  accept="image/x-png,image/gif,image/jpeg"
                                  ref={this.fileUpload}
                                  className="d-none"
                                />
                                <button
                                  type="button"
                                  className="btn btn-template-outlined"
                                  style={{ marginTop: "30px" }}
                                  onClick={this.showFileUpload}
                                >
                                  사진 업로드
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className={classnames("form-control", {
                                      "is-invalid": errors.company_name
                                    })}
                                    placeholder="회사명"
                                    name="company_name"
                                    value={this.state.company_name}
                                    onChange={this.onChange}
                                  />
                                  {errors.company_name && (
                                    <div className="invalid_message">
                                      {errors.company_name}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12 mt-4">
                                <div className="form-group">
                                  <select
                                    className={classnames("form-control", {
                                      "is-invalid": errors.meeting_region
                                    })}
                                    name="meeting_region"
                                    onChange={this.onChange}
                                    value={this.state.meeting_region}
                                  >
                                    <option
                                      value=""
                                      key="0"
                                      defaultValue
                                      hidden
                                    >
                                      미팅 가능 지역
                                    </option>
                                    {select_field_region.values.map(
                                      (value, index) => {
                                        return (
                                          <option value={value} key={index + 1}>
                                            {
                                              select_field_region.contents[
                                                index
                                              ]
                                            }
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>
                                  {errors.meeting_region && (
                                    <div className="invalid-feedback">
                                      {errors.meeting_region}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12 mt-4">
                                <div className="form-group">
                                  <select
                                    className={classnames("form-control", {
                                      "is-invalid": errors.company_type
                                    })}
                                    name="company_type"
                                    onChange={this.onChange}
                                    value={this.state.company_type}
                                  >
                                    <option
                                      value=""
                                      key="0"
                                      defaultValue
                                      hidden
                                    >
                                      사업자 유형을 선택하세요
                                    </option>
                                    {select_field_company_type.values.map(
                                      (value, index) => {
                                        return (
                                          <option value={value} key={index + 1}>
                                            {
                                              select_field_company_type
                                                .contents[index]
                                            }
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>
                                  {errors.company_type && (
                                    <div className="invalid-feedback">
                                      {errors.company_type}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12 mt-4">
                                <div className="form-group">
                                  <textarea
                                    className={classnames("form-control", {
                                      "is-invalid": errors.company_introduction
                                    })}
                                    placeholder="회사소개"
                                    name="company_introduction"
                                    value={this.state.company_introduction}
                                    onChange={this.onChange}
                                  />
                                  {errors.company_introduction && (
                                    <div className="invalid-feedback">
                                      {errors.company_introduction}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="mt-5">
                      <button
                        className="btn btn-info float-left"
                        onClick={this.handleNextClick}
                      >
                        {next ? "이전" : "다음"}
                      </button>

                      {next ? (
                        <button
                          type="submit"
                          className="btn btn-template-outlined float-right"
                        >
                          <i className="fa fa-user-md" /> 등록
                        </button>
                      ) : null}
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
