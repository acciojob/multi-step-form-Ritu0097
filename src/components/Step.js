// Step.js
import React from 'react';
import './Step.css';

const Step = ({ step, formData, setFormData, onNext, onPrev, onSubmit }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      onSubmit();
    } else {
      onNext();
    }
  };

  return (
    <div id={`step${step}`} className={`step-container ${step === 1 ? 'show' : 'hide'}`}>
      <h2>Step {step}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        {step !== 1 && (
          <button type="button" onClick={onPrev}>
            Previous
          </button>
        )}
        {step !== 3 ? (
          <button type="submit">Next</button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default Step;
