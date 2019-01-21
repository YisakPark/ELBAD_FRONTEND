import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import classnames from "classnames";

class CreatorList extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      search_keyword: "",
      subscribers: "",
      category: "",
      age_range: "",
      monthly_views: "",
      views_per_video: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const search = {
      search_keyword: this.state.search_keyword,
      subscribers: this.state.subscribers,
      category: this.state.category,
      age_range: this.state.age_range,
      monthly_views: this.state.monthly_views,
      views_per_video: this.state.views_per_video
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
        <div id="heading-breadcrumbs">
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap middle_bar">
              <div className="col-md-7">
                <h1 className="h2">크리에이터 리스트</h1>
              </div>
            </div>
          </div>
        </div>
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
                    "is-invalid": errors.search_keyword
                  })}
                  placeholder="키워드 검색"
                  name="search_keyword"
                  value={this.state.search_keyword}
                  onChange={this.onChange}
                />
                {errors.search_keyword && (
                  <div className="invalid-feedback">
                    {errors.search_keyword}
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
                  name="subscribers"
                  onChange={this.onChange}
                  value={this.state.subscribers}
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
                  name="category"
                  onChange={this.onChange}
                  value={this.state.category}
                >
                  <option value="" key="0" defaultValue hidden>
                    카테고리
                  </option>
                </select>

                <select
                  className="form-control col-md-3 ml-2"
                  name="age"
                  onChange={this.onChange}
                  value={this.state.age_range}
                >
                  <option value="" key="0" defaultValue hidden>
                    주요 시청 연령대
                  </option>
                </select>
                <select
                  className="form-control col-md-3 ml-2"
                  name="age"
                  onChange={this.onChange}
                  value={this.state.monthly_views}
                >
                  <option value="" key="0" defaultValue hidden>
                    월간 평균 조회수
                  </option>
                </select>
                <select
                  className="form-control col-md-3 ml-2"
                  name="age"
                  onChange={this.onChange}
                  value={this.state.views_per_video}
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
                    <div className="col-lg-3 col-md-4">
                      <div className="product">
                        <div className="image">
                          <a href="shop-detail.html">
                            <img
                              src="img/product1.jpg"
                              alt=""
                              className="img-fluid image1"
                            />
                          </a>
                        </div>
                        <div className="text">
                          <h3 className="h5">
                            <a href="shop-detail.html" style={titleStyle}>
                              크리에이터 1
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
                    <div className="col-lg-3 col-md-4">
                      <div className="product">
                        <div className="image">
                          <a href="shop-detail.html">
                            <img
                              src="img/product2.jpg"
                              alt=""
                              className="img-fluid image1"
                            />
                          </a>
                        </div>
                        <div className="text">
                          <h3 className="h5">
                            <a href="shop-detail.html" style={titleStyle}>
                              크리에이터 2
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
                    <div className="col-lg-3 col-md-4">
                      <div className="product">
                        <div className="image">
                          <a href="shop-detail.html">
                            <img
                              src="img/product3.jpg"
                              alt=""
                              className="img-fluid image1"
                            />
                          </a>
                        </div>
                        <div className="text">
                          <h3 className="h5">
                            <a href="shop-detail.html" style={titleStyle}>
                              크리에이터 3
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
                    <div className="col-lg-3 col-md-4">
                      <div className="product">
                        <div className="image">
                          <a href="shop-detail.html">
                            <img
                              src="img/product4.jpg"
                              alt=""
                              className="img-fluid image1"
                            />
                          </a>
                        </div>
                        <div className="text">
                          <h3 className="h5">
                            <a href="shop-detail.html" style={titleStyle}>
                              크리에이터 4
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
                    <div className="col-lg-3 col-md-4">
                      <div className="product">
                        <div className="image">
                          <a href="shop-detail.html">
                            <img
                              src="img/product3.jpg"
                              alt=""
                              className="img-fluid image1"
                            />
                          </a>
                        </div>
                        <div className="text">
                          <h3 className="h5">
                            <a href="shop-detail.html" style={titleStyle}>
                              크리에이터 5
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
                    <div className="col-lg-3 col-md-4">
                      <div className="product">
                        <div className="image">
                          <a href="shop-detail.html">
                            <img
                              src="img/product4.jpg"
                              alt=""
                              className="img-fluid image1"
                            />
                          </a>
                        </div>
                        <div className="text">
                          <h3 className="h5">
                            <a href="shop-detail.html" style={titleStyle}>
                              크리에이터 6
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
                    <div className="col-lg-3 col-md-4">
                      <div className="product">
                        <div className="image">
                          <a href="shop-detail.html">
                            <img
                              src="img/product2.jpg"
                              alt=""
                              className="img-fluid image1"
                            />
                          </a>
                        </div>
                        <div className="text">
                          <h3 className="h5">
                            <a href="shop-detail.html" style={titleStyle}>
                              크리에이터 7
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
                    <div className="col-lg-3 col-md-4">
                      <div className="product">
                        <div className="image">
                          <a href="shop-detail.html">
                            <img
                              src="img/product1.jpg"
                              alt=""
                              className="img-fluid image1"
                            />
                          </a>
                        </div>
                        <div className="text">
                          <h3 className="h5">
                            <a href="shop-detail.html" style={titleStyle}>
                              크리에이터 8
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

export default CreatorList;
