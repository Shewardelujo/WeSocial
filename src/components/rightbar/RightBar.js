import React from "react";
import "./rightbar.css";

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
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="./assets/person/3.jpg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Arike Ade</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="./assets/person/3.jpg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Arike Ade</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="./assets/person/3.jpg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Arike Ade</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="./assets/person/3.jpg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Arike Ade</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="./assets/person/3.jpg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Arike Ade</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="./assets/person/3.jpg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Arike Ade</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="./assets/person/3.jpg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Arike Ade</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                className="rightBarProfileImg"
                src="./assets/person/3.jpg"
                alt=""
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Arike Ade</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
