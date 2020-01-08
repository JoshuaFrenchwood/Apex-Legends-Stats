import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Player extends Component {
  state = {
    redirect: false
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
  };
  render() {

    

    return (
      <div>
  <h1>{this.props.profile.platformUserId}</h1>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Home</button>
      </div>
    );
  }
}
