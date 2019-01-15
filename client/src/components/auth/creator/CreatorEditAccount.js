import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import TextFieldGroup from "../../common/TextFieldGroup";
import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";

class CreatorEditAccount extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      imagePreviewUrl: "",
      user_type: "creator",
      email: "",
      name: "",
      password: "",
      password2: "",
      meeting_region: "",
      cell_phone_number: "",
      creator_nickname: "",
      creator_introduction: "",
      creator_photo: "",
      product_delivery_address: "",
      product_delivery_recipient: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange_img = this.onChange_img.bind(this);
  }

  componentDidMount() {
    window.gapi_load();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
        creator_photo: file,
        imagePreviewUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
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
      creator_nickname: this.state.creator_nickname,
      creator_introduction: this.state.creator_introduction,
      creator_photo: this.state.company_photo,
      product_delivery_address: this.state.product_delivery_address,
      product_delivery_recipient: this.state.product_delivery_recipient
    };

    this.props.registerUser(newUser, this.props.history);
  }

  onClick(e) {
    e.preventDefault();
    window.get_youtube_channel_detail();
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
            <div className="row d-flex align-items-center flex-wrap">
              <div className="col-md-7">
                <h1 className="h2">내 정보 수정</h1>
              </div>
              <div className="col-md-5">
                <ul className="breadcrumb d-flex justify-content-end">
                  <li className="breadcrumb-item">
                    <a href="index.html">홈</a>
                  </li>
                  <li className="breadcrumb-item active">마이페이지</li>
                  <li className="breadcrumb-item active">내 정보 수정</li>
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
                      placeholder="이메일"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                      id="register_email"
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
                      label="닉네임 (크리에이터로 활동시 사용하는 닉네임을 적어주세요)"
                      placeholder="닉네임"
                      name="creator_nickname"
                      value={this.state.creator_nickname}
                      onChange={this.onChange}
                      error={errors.creator_nickname}
                      id="register_creator_nick_name"
                    />
                    <TextAreaFieldGroup
                      placeholder="본인 소개"
                      name="creator_introduction"
                      value={this.state.creator_introduction}
                      onChange={this.onChange}
                      error={errors.creator_introduction}
                      id="register_creator_introduction"
                    />
                    <TextFieldGroup
                      placeholder="제품 배송 받을 주소"
                      name="product_delivery_address"
                      value={this.state.product_delivery_address}
                      onChange={this.onChange}
                      error={errors.product_delivery_address}
                      id="register_product_delivery_address"
                    />
                    <TextFieldGroup
                      placeholder="제품 배송 수령인"
                      name="product_delivery_recipient"
                      value={this.state.product_delivery_recipient}
                      onChange={this.onChange}
                      error={errors.product_delivery_recipient}
                      id="register_product_delivery_recipient"
                    />
                    <div className="mb-4 form-group">
                      <label htmlFor="register_creator_photo">
                        프로필 사진
                      </label>
                      <div className="input-group mb-3">
                        <div className="custom-file mr-2">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="register_creator_photo"
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
                    <div className="text-center mb-4">
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={this.onClick}
                      >
                        <i className="fa fa-youtube-play" /> 유투브 채널
                        상세정보 불러들이기
                      </button>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-template-outlined"
                      >
                        <i className="fa fa-user-md" /> 등록
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

CreatorEditAccount.propTypes = {
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
)(withRouter(CreatorEditAccount));
