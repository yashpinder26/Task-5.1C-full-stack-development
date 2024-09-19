import React, { useState } from 'react';
import QuestionForm from './Question.jsx';
import ArticleForm from './Article.jsx';
import './App.css';

const PostPage = () => {
  const [postType, setPostType] = useState('Question'); // default to 'Question'

  // Handler to update the post type based on user selection
  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
  };

  return (
    <div>
      <h1>New Post</h1>

      {/* Radio buttons to select post type */}
      <div>
        <label>
          <input
            type="radio"
            value="Question"
            checked={postType === 'Question'}
            onChange={handlePostTypeChange}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            value="Article"
            checked={postType === 'Article'}
            onChange={handlePostTypeChange}
          />
          Article
        </label>
      </div>

      {/* Conditionally render the correct form based on post type */}
      {postType === 'Question' ? <QuestionForm /> : <ArticleForm />}

      <button>Post</button>
    </div>
  );
};

export default PostPage;
