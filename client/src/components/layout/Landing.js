import React, { Component } from "react";
import Typed from "react-typed";

class Landing extends Component {
  render() {
    return (
      <div>
        <Typed
          strings={["크리에이터의", "브랜드의", "모두의"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <p> 미래를 맡기세요</p>
      </div>
    );
  }
}

export default Landing;
