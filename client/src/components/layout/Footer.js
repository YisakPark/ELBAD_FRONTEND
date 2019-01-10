import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="copyrights">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 text-center-md">
                <p>&copy; 2019. ELBA / ELBAD</p>
              </div>
              <div className="col-lg-8 text-right text-center-md">
                <p>
                  Template design by{" "}
                  <a href="https://bootstrapious.com/free-templates">
                    Bootstrapious Templates{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
