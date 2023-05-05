import React, { Component } from "react";
import logoIcon from "../assets/logo.png";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatValue: props.name,
      id: props.id,
    };
  }

  render() {
    return (
      <div className="answerChat" key={this.state.id}>
        <div className="answerUsericon">
          <img src={logoIcon} width="40px" height="40px" alt="user" />
        </div>
        <div className="msgBox">
          <p key={this.state.id}>{this.state.chatValue}</p>
        </div>
      </div>
    );
  }
}

export default Answer;
