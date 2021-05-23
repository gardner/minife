import React, { useState, useEffect } from 'react';
import './App.css';

function Comments({postId}) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(data => data.json());
      setComments(result);
    }
    getComments()
  }, [postId]);

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <b>{comment.name}</b>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default Comments;
