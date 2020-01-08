import React, { Component } from "react";
import "./App.css";
import FindPlayerBox from "./layout/FindPlayerBox";
import axios from "axios";
import Player from "./layout/Player";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    profile: {},
    submit: false
  };

  //Search for User profiles
  searchProfile = async (userName, platform) => {
    const URL = `/v2/apex/standard/profile/${platform}/${userName}`;

    const headers = {
      "TRN-Api-Key": process.env.REACT_APP_API_KEY
    };

    try {
      const res = await axios.get(URL, { headers });
      this.setState({ profile: res.data.data.platformInfo });
      console.log(res.data.data.platformInfo.platformUserId);
      this.setState({ submit: true });
    } catch (error) {
      console.log(error);
      this.setState({ submit: false });
    }
  };

  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <FindPlayerBox
                  {...props}
                  searchProfile={this.searchProfile}
                  profile={this.state.profile}
                  submit={this.state.submit}
                />
              )}
            />
            <Route
              exact
              path='/player'
              render={props => (
                <Player
                  {...props}
                  profile={this.state.profile}
                  submit={this.state.submit}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
