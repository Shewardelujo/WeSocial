import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "../../pages/profile/profile.css";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Engaged</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              alt=""
              src="assets/person/1.jpg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Desewa Cindy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt=""
              src="assets/person/1.jpg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Desewa Cindy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt=""
              src="assets/person/1.jpg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Desewa Cindy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt=""
              src="assets/person/1.jpg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Desewa Cindy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt=""
              src="assets/person/1.jpg"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Desewa Cindy</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
