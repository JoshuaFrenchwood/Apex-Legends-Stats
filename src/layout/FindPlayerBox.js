import React, { Component } from "react";
import PropTypes from "prop-types";
import {  Redirect } from "react-router-dom";

export default class FindPlayerBox extends Component {
  state = {
    userName: "",
    platform: "psn",
    nextPage:false
  };

  static propTypes = {
    searchProfile: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchProfile(this.state.userName, this.state.platform);

    this.setState({nextPage:true});

  };

  render() {
      if(this.state.nextPage===true && this.props.submit===true){
          return <Redirect to="/player"/>
      }
    return (
      <div className='card-input'>
        <h1>Find Apex Player Stats</h1>
        <form onSubmit={this.onSubmit}>
          <label>Enter User Name</label>
          <input
            className=''
            type='text'
            name='userName'
            onChange={this.onChange}
            value={this.state.userName}
          />
          <label>Platform</label>
          <select onChange={this.onChange}>
            <option name='platform' value='origin'>
              PC
            </option>
            <option name='platform' value='xbl'>
              Xbox
            </option>
            <option name='platform' value='psn'>
              psn
            </option>
          </select>
          <input className='btn' type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
