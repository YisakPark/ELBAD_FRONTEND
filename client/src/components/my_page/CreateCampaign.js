import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import MiddleBar from "./../common/MiddleBar";
import classnames from "classnames";

class CreateCampaign extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { errors } = this.state;
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
                <ul
                  id="pills-tab"
                  role="tablist"
                  className="nav nav-pills nav-justified"
                >
                  <li className="nav-item">
                    <a
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      className="nav-link active"
                    >
                      캠페인 기본정보
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      className="nav-link"
                    >
                      상품 상제정보
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="pills-contact-tab"
                      data-toggle="pill"
                      href="#pills-contact"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                      className="nav-link"
                    >
                      광고 타겟 & 캠페인 예산
                    </a>
                  </li>
                </ul>
                <div id="pills-tabContent" className="tab-content">
                  <div
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    className="tab-pane fade show active"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.name
                        })}
                        placeholder="캠페인 제목"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <div className="invalid_message">{errors.name}</div>
                      )}
                    </div>

                    <div className="form-group mt-5">
                      <input
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": errors.name
                        })}
                        placeholder="캠페인 목적"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <div className="invalid_message">{errors.name}</div>
                      )}
                    </div>
                  </div>
                  <div
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    className="tab-pane fade"
                  >
                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                    single-origin coffee squid. Exercitation +1 labore velit,
                    blog sartorial PBR leggings next level wes anderson artisan
                    four loko farm-to-table craft beer twee. Qui photo booth
                    letterpress, commodo enim craft beer mlkshk aliquip jean
                    shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
                    assumenda labore aesthetic magna delectus mollit. Keytar
                    helvetica VHS salvia yr, vero magna velit sapiente labore
                    stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                    sustainable jean shorts beard ut DIY ethical culpa terry
                    richardson biodiesel. Art party scenester stumptown, tumblr
                    butcher vero sint qui sapiente accusamus tattooed echo
                    park.Raw denim you probably haven't heard of them jean
                    shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                    master cleanse. Mustache cliche tempor, williamsburg carles
                    vegan helvetica. Reprehenderit butcher retro keffiyeh
                    dreamcatcher synth. Cosby sweater eu banh mi, qui irure
                    terry richardson ex squid. Aliquip placeat salvia cillum
                    iphone. Seitan aliquip quis cardigan american apparel,
                    butcher voluptate nisi qui.
                  </div>
                  <div
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    className="tab-pane fade"
                  >
                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                    single-origin coffee squid. Exercitation +1 labore velit,
                    blog sartorial PBR leggings next level wes anderson artisan
                    four loko farm-to-table craft beer twee. Qui photo booth
                    letterpress, commodo enim craft beer mlkshk aliquip jean
                    shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
                    assumenda labore aesthetic magna delectus mollit. Keytar
                    helvetica VHS salvia yr, vero magna velit sapiente labore
                    stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                    sustainable jean shorts beard ut DIY ethical culpa terry
                    richardson biodiesel. Art party scenester stumptown, tumblr
                    butcher vero sint qui sapiente accusamus tattooed echo park.
                  </div>
                  <div
                    id="pills-marketing"
                    role="tabpanel"
                    aria-labelledby="pills-marketing-tab"
                    className="tab-pane fade"
                  >
                    Trust fund seitan letterpress, keytar raw denim keffiyeh
                    etsy art party before they sold out master cleanse
                    gluten-free squid scenester freegan cosby sweater. Fanny
                    pack portland seitan DIY, art party locavore wolf cliche
                    high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                    PBR, banh mi before they sold out farm-to-table VHS viral
                    locavore cosby sweater. Lomo wolf viral, mustache readymade
                    thundercats keffiyeh craft beer marfa ethical. Wolf salvia
                    freegan, sartorial keffiyeh echo park vegan.Raw denim you
                    probably haven't heard of them jean shorts Austin. Nesciunt
                    tofu stumptown aliqua, retro synth master cleanse. Mustache
                    cliche tempor, williamsburg carles vegan helvetica.
                    Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
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
