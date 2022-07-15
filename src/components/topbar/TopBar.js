import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">WeSocial</span>
      </div>
      <div className="topBarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
          <span className="topBarLink"></span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconsItem">
            <Person />
            <span className="topBarIconsBadge">1</span>
          </div>
          <div className="topBarIconsItem">
            <Chat />
            <span className="topBarIconsBadge">2</span>
          </div>
          <div className="topBarIconsItem">
            <Notifications />
            <span className="topBarIconsBadge">1</span>
          </div>
        </div>
        <img src="./assets/person/1.jpg" alt="" className="topBarImg" />
      </div>
    </div>
  );
};

export default TopBar;
