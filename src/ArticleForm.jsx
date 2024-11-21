import React, { useState } from 'react';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articleText, setArticleText] = useState('');
  const [tags, setTags] = useState('');

  return (
    <div>
      <h2>What do you want to share?</h2>
      <input
        type="text"
        placeholder="Enter a descriptive title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter a 1-paragraph abstract"
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
      />
      <textarea
        placeholder="Enter the article text"
        value={articleText}
        onChange={(e) => setArticleText(e.target.value)}
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

export default ArticleForm;
