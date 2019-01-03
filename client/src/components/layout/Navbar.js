import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header className="nav-holder make-sticky">
        <div id="navbar" role="navigation" className="navbar navbar-expand-lg">
          <div className="container">
            <Link to="/">
              <img
                src="img/logo.png"
                alt="Universal logo"
                className="d-none d-md-inline-block"
              />
              <img
                src="img/logo-small.png"
                alt="Universal logo"
                className="d-inline-block d-md-none"
              />
              <span className="sr-only">Universal - go to homepage</span>
            </Link>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              className="navbar-toggler btn-template-outlined"
            >
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-align-justify" />
            </button>
            <div id="navigation" className="navbar-collapse collapse">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle nav-link"
                  >
                    사용 가이드 <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <a href="advertiser_guide.html" className="nav-link">
                        광고주 가이드
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="youtuber_guide.html" className="nav-link">
                        유투버 가이드
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="campaign_list.html">캠페인 리스트 </a>
                </li>
                <li className="nav-item">
                  <a href="youtuber_list.html">유투버 리스트 </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle"
                  >
                    고객센터 <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <a href="faq.html" className="nav-link">
                        FAQ
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="contact.html" className="nav-link">
                        1:1 문의
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle"
                  >
                    마이페이지 <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <a href="my_campaigns.html" className="nav-link">
                        내 캠페인
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="wishlist.html" className="nav-link">
                        관심 캠페인/유투버
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="edit_account.html" className="nav-link">
                        내 정보 수정
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="packages.html" className="nav-link">
                        포인트 충전{" "}
                      </a>
                    </li>
                  </ul>
                </li>{" "}
              </ul>
            </div>
            <div id="search" className="collapse clearfix">
              <form role="search" className="navbar-form">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-template-main">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
