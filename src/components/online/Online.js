import React from "react";
import "./online.css";

function Online({ user }) {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img className="rightBarProfileImg" src={user.profilePictures} alt="" />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUsername">{user.username}</span>
    </li>
  );
}

export default Online;
