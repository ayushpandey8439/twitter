import React, { Component } from "react";
import "./TweetPanel.css";
import display_picture from "./display_picture.jpg";
export class TweetPanel extends Component {
  render() {
    return (
      <div className="tweet_panel_container">
        <img src={display_picture} className="display_picture"></img>
        <textarea
          rows="5"
          placeholder="What's happening?"
          className="tweet_input"
        ></textarea>
      </div>
    );
  }
}

export default TweetPanel;
