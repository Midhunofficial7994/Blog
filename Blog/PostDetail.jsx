import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts[id];

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}

export default PostDetail;
