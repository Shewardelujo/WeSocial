import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="./assets/person/1.jpg"
              alt=""
            />
            <span className="postUsername">Adesewa Adefalujo</span>
            <span className="postDate"> 5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It's my first post:)</span>
          <img className="postImg" src="./assets/person/1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="./assets/post/like.png" alt="" />
            <img className="likeIcon" src="./assets/post/heart.png" alt="" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
