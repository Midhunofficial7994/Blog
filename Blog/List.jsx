import React from 'react';
import { Link } from 'react-router-dom';

function List({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>
            <Link to={`/post/${index}`}>{post.title}</Link>
          </h2>
          <p>{post.content.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default List;
