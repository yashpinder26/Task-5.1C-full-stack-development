import React from 'react';

const InputField = ({ label, placeholder, type }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea placeholder={placeholder}></textarea>
      ) : (
        <input type={type} placeholder={placeholder} />
      )}
    </div>
  );
};

export default InputField;
