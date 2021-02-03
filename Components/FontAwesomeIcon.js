import React, { Component } from "react";

class FontAwesomeIcon extends Component {
  render() {
    return (
      <a href={this.props.link} target="blank">
        <i className={this.props.icon}></i>
      </a>
    );
  }
}

export default FontAwesomeIcon;
