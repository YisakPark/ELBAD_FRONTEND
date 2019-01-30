import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCreatorList } from "../../actions/profileActions";
import MiddleBar from "../common/MiddleBar";

class CreatorList extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      creator_list: [],
      search_nickname: "",
      search_subscribers: "",
      search_category: "",
      search_age_range: "",
      search_monthly_views: "",
      search_views_per_video: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCreatorList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.creator_list.users) {
      this.setState({ creator_list: nextProps.profile.creator_list.users });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const search = {
      creator_list: {},
      search_nickname: this.state.search_nickname,
      search_subscribers: this.state.search_subscribers,
      search_category: this.state.search_category,
      search_age_range: this.state.search_age_range,
      search_monthly_views: this.state.search_monthly_views,
      search_views_per_video: this.state.search_views_per_video
    };

    console.log(search);
  }

  render() {
    const { errors } = this.state;

    const searchStyle = {
      marginTop: "12px"
    };

    const titleStyle = {
      fontSize: "20px"
    };

    const contentStyle = {
      fontSize: "16px"
    };

    return (
      <div>
        <MiddleBar content="크리에이터 리스트" />
        <div
          className="container panel panel-default sidebar-menu"
          style={searchStyle}
        >
          <div className="panel-heading">
            <h3 className="h4 panel-title">크리에이터 찾기</h3>
          </div>
          <div className="panel-body">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.search_nickname
                  })}
                  placeholder="크리에이터 닉네임 검색"
                  name="search_nickname"
                  value={this.state.search_nickname}
                  onChange={this.onChange}
                />
                {errors.search_nickname && (
                  <div className="invalid-feedback">
                    {errors.search_nickname}
                  </div>
                )}
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-template-main">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
              <div className="input-group mt-4">
                <select
                  className="form-control col-md-2"
                  name="search_subscribers"
                  onChange={this.onChange}
                  value={this.state.search_subscribers}
                >
                  <option value="" key="0" defaultValue hidden>
                    구독자 수
                  </option>
                  <option value="1k-10k" key="1">
                    1천 ~ 1만
                  </option>
                  <option value="10k-100k" key="2">
                    1만 ~ 10만
                  </option>
                  <option value="100k-500k" key="3">
                    10만 ~ 50만
                  </option>
                  <option value="500k-1m" key="4">
                    50만 ~ 100만
                  </option>
                  <option value="1m-2m" key="5">
                    100만 ~ 200만
                  </option>
                  <option value="2m-" key="6">
                    200만 ~{" "}
                  </option>
                </select>

                <select
                  className="form-control col-md-2 ml-2"
                  name="search_category"
                  onChange={this.onChange}
                  value={this.state.search_category}
                >
                  <option value="" key="0" defaultValue hidden>
                    카테고리
                  </option>
                </select>

                <select
                  className="form-control col-md-3 ml-2"
                  name="age"
                  onChange={this.onChange}
                  value={this.state.search_age_range}
                >
                  <option value="" key="0" defaultValue hidden>
                    주요 시청 연령대
                  </option>
                </select>
                <select
                  className="form-control col-md-3 ml-2"
                  name="age"
                  onChange={this.onChange}
                  value={this.state.search_monthly_views}
                >
                  <option value="" key="0" defaultValue hidden>
                    월간 평균 조회수
                  </option>
                  creator_list: {},{" "}
                </select>
                <select
                  className="form-control col-md-3 ml-2"
                  name="age"
                  onChange={this.onChange}
                  value={this.state.search_views_per_video}
                >
                  <option value="" key="0" defaultValue hidden>
                    게시물 당 평균 조회수
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div id="content">
          <div className="container">
            <div className="row bar">
              <div className="col-md-12">
                <div className="products-big">
                  <div className="row products">
                    {this.state.creator_list.map((creator, i) => (
                      <div className="col-lg-3 col-md-4" key={i}>
                        <div className="product">
                          <div
                            className="image"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                          >
                            <a href="shop-detail.html">
                              <img
                                src={
                                  "http://10.38.101.70:4000/api/users/getPhoto/" +
                                  creator.photo
                                }
                                alt=""
                                className="img-fluid image1"
                              />
                            </a>
                          </div>
                          <div className="text">
                            <h3 className="h5">
                              <a href="shop-detail.html" style={titleStyle}>
                                {creator.name}
                              </a>
                            </h3>
                            <p className="price" style={contentStyle}>
                              게임 전문 크리에이터 <br />
                              누적 조회수: 100만 <br />
                              1회 광고시 희망 광고비: 30만원
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pages">
                  <nav
                    aria-label="Page navigation example"
                    className="d-flex justify-content-center"
                  >
                    <ul className="pagination">
                      <li className="page-item">
                        <a href="#" className="page-link">
                          <i className="fa fa-angle-double-left" />
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          <i className="fa fa-angle-double-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreatorList.propTypes = {
  getCreatorList: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCreatorList }
)(withRouter(CreatorList));
