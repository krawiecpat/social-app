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

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    axios.post('https://akademia108.pl/api/social-app/post/older-then',
    {},
      axiosConfig).then((res) => {
        setPosts(res.data.created_at.last())
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  }

  useEffect(() => {
    getData()
  }, []
  );

  useEffect(() => {
    loadMore()
  }, []
  );

  return (
    <div className="container-post">
      {posts.map((post) => {
        return (
          <div key={post.id} className="head-post">
            <h3 className="user-name-post">{post.user.username}</h3>
            <p className="content-post">{post.content}</p>
            <p className="like-post"> <span className="heart">&#9829;</span> <span>{post.likes.length}</span></p>
            <p className="data-post">{post.created_at}</p>
          </div>
        )
      })}
      <button onClick={loadMore}>Wczytaj więcej!</button>
    </div>
  );
}

export default Home;


//  1. napisz funkcję loadMore +
// 2. w tej funkcji wywołaj zapytanie axios do adreslu post/older-than +
// 3. pobierając dane wyślij opdowiednie body - zobacz dokumentację - ma być tam data ostatniego posta z Twojego stanu posts
// 4. jak pobierzesz kolejne 10 postów, to dołącz je do już istniejącaj tablicy posts za pomocą metody concat
// 5. połączone tablice dodaj ponownie do stanu za pomocą setPosts()
// 6. funkcje loadMore wywołuj po kliknięciu w button