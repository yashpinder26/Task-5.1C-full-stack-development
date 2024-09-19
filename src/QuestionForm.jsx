import React, { useState } from 'react';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  return (
    <div>
      <h2>What do you want to ask?</h2>
      <input
        type="text"
        placeholder="Start your question with how, what, why, etc."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Describe your problem"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (e.g. Java, React)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
    </div>
  );
};

export default QuestionForm;
