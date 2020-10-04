import React, { Component } from "react";
import "./App.css";
import HomeTitle from "./HomeTitle/HomeTitle";
import Sidebar from "./Sidebar/Sidebar";
import TweetPanel from "./TweetPanel/TweetPanel";
class App extends Component {
  render() {
    return (
      <div className="body">
        <Sidebar></Sidebar>
        <div className="center_panels">
          <HomeTitle />
          <TweetPanel />
        </div>
      </div>
    );
  }
}

export default App;
