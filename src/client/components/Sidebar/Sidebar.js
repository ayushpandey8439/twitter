import React, { Component } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar_container">
        <div className="sidebar_button_container">
          <TwitterIcon className="sidebar_icon" />
        </div>

        <div className="sidebar_button_container">
          <HomeIcon className="sidebar_icon" />
          <div className="sidebar_button_text">Home</div>
        </div>
        <div className="sidebar_button_container">
          <LocalOfferIcon className="sidebar_icon" />
          <div className="sidebar_button_text">Explore</div>
        </div>

        <div className="sidebar_button_container">
          <NotificationsNoneIcon className="sidebar_icon" />
          <div className="sidebar_button_text">Notifications</div>
        </div>
        <div className="sidebar_button_container">
          <MailOutlineIcon className="sidebar_icon" />
          <div className="sidebar_button_text">Messages</div>
        </div>
        <div className="sidebar_button_container">
          <BookmarkBorderIcon className="sidebar_icon" />
          <div className="sidebar_button_text">Bookmarks</div>
        </div>
        <div className="sidebar_button_container">
          <ListAltIcon className="sidebar_icon" />
          <div className="sidebar_button_text">Lists</div>
        </div>
        <div className="sidebar_button_container">
          <PersonOutlineIcon className="sidebar_icon" />
          <div className="sidebar_button_text">Profile</div>
        </div>
        <div className="sidebar_button_container">
          <MoreHorizIcon className="sidebar_icon" />
          <div className="sidebar_button_text">More</div>
        </div>
        <div className="sidebar_tweet_button_container">
          <div className="sidebar_button_text">Tweet</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
