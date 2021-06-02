import React, { useEffect, useState } from "react";
import "./Feed.css";
// import db from "./firebase";
import MessageSender from "../../Components/MessageSender/MessageSender";
import Post from "../../Components/Post/Post";
import axios from "../../Pages/Authentication/axios";
import Pusher from "pusher-js";

const pusher = new Pusher('2e9cac274c8b7cba5a5b', {
  cluster: 'mt1'
});


function Feed() {
  const [posts, setPosts] = useState([]);


  const syncFeed = () => {
    axios.get("/retrieve/posts").then((res) => {
      // console.log(res.data);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    const channel = pusher.subscribe('posts');
    channel.bind('inserted', function(data) {
      syncFeed()
    });
  },[])

  useEffect(() => {
    syncFeed();
  }, []);
  return (
    <div className="feed">
      <MessageSender />
      {posts.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))}
    </div>
  );
}

export default Feed;
