import React from 'react';
import InputField from './InputField.jsx';
import './PostForm.css';

const PostForm = ({ postType }) => {
  return (
    <div className="form-container">
      <InputField label="Title" placeholder="Enter the title here" type="text" />
      {postType === 'question' ? (
        <InputField label="Description" placeholder="Explain your issue" type="textarea" />
      ) : (
        <>
          <InputField label="Abstract" placeholder="Write a brief summary" type="textarea" />
          <InputField label="Article Content" placeholder="Write your article here" type="textarea" />
        </>
      )}
      <InputField label="Tags" placeholder="Add up to 3 tags (e.g., JavaScript, React)" type="text" />
      <button type="submit" className="submit-button">Submit</button>
    </div>
  );
};

export default PostForm;
