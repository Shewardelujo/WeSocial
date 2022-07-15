import React from "react";
import Feed from "../../components/feed/Feed";
import LeftBar from "../../components/leftbar/LeftBar";
import RightBar from "../../components/rightbar/RightBar";
import TopBar from "../../components/topbar/TopBar";
import "./home.css";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
