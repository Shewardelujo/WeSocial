import React from "react";
import "./closeFriend.css";

function CloseFriend({ user }) {
  return (
    <li className="leftBarFriend">
      <img className="leftBarFriendImg" src={user.profilePictures} alt="" />
      <span className="leftBarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
