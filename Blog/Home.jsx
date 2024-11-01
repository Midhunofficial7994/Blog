import React, { useState } from 'react';
import List from './List';
import NewPostForm from './NewPostForm';

function Home() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div>
      <h1>Blog</h1>
      <NewPostForm onAddPost={addNewPost} />
      <List posts={posts} />
    </div>
  );
}

export default Home;
