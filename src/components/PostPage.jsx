import React, { useState } from 'react';
import PostForm from './PostForm.jsx';
import './PostPage.css';

const PostPage = () => {
  const [postType, setPostType] = useState('question');

  return (
    <div className="page-container">
      <h1>Create a New Post</h1>
      <div className="type-selector">
        <label>
          <input
            type="radio"
            value="question"
            checked={postType === 'question'}
            onChange={() => setPostType('question')}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            value="article"
            checked={postType === 'article'}
            onChange={() => setPostType('article')}
          />
          Article
        </label>
      </div>
      <PostForm postType={postType} />
    </div>
  );
};

export default PostPage;
