import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Home.css';

function Home() {

  const [posts, setPosts] = useState([]);

  const getData = () => {

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    axios.post('https://akademia108.pl/api/social-app/post/latest',
      {},
      axiosConfig).then((res) => {
        setPosts(res.data)
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  }

  const loadMore = () => {
    axios.post('https://akademia108.pl/api/social-app/post/older-then',
    {})
  }

  useEffect(() => {
    getData()
  },[]
  );

  console.log(posts);

  return (
    <div className="container-post">
      {posts.map((post) => {
        return (
          <div className="head-post">
            <h3 className="user-name-post">{post.user.username}</h3>
            <p className="content-post">{post.content}</p>
            <p className="like-post"> <span className="heart">&#9829;</span> <span>{post.likes.length}</span></p>
          </div>
        )
      })}
      <button>Load more</button>
    </div>
  );
}

export default Home;