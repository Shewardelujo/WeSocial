import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/post/gift.png" alt="" />
          <span className="birthdayText">
            <b>Olayinka Ojo</b> and <b>3 others friends</b> have birthday today
          </span>
        </div>
        <img className="rightBarAd" src="./assets/post/ad.png" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
