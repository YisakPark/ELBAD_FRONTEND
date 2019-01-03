import React, { Component } from "react";
import carousel_background from "../../img/photogrid.jpg";

const carousel_sty = {
  backgroundImage: `url(${carousel_background})`,
  backgroundRepeat: "repeat",
  backgroundPosition: "center",
  backgroundSize: "cover"
};
class Landing extends Component {
  render() {
    return <div>hompage</div>;
  }
}

export default Landing;
