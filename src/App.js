import React, { useState, useEffect } from 'react';
import Comments from './Comments'
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(data => data.json());
      setPosts(result);
    }
    getPosts()
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <b>{post.title}</b>
          <p>{post.body}</p>
          <Comments postId={post.id} />
        </li>
      ))}
    </ul>
  );
}

export default App;
