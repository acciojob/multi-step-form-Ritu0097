// Step.js
import React from 'react';

function Step({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) {
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input type="text" id="first_name" value={formData.first_name} onChange={handleChange} />
            <br />
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" id="last_name" value={formData.last_name} onChange={handleChange} />
            <br />
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <label htmlFor="model">Car Model:</label>
            <input type="text" id="model" value={formData.model} onChange={handleChange} />
            <br />
            <label htmlFor="car_price">Car Price:</label>
            <input type="text" id="car_price" value={formData.car_price} onChange={handleChange} />
            <br />
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <label htmlFor="card_info">Card Information:</label>
            <input type="text" id="card_info" value={formData.card_info} onChange={handleChange} />
            <br />
            <label htmlFor="expiry_date">Expiry Date:</label>
            <input type="text" id="expiry_date" value={formData.expiry_date} onChange={handleChange} />
            <br />
            <button onClick={prevStep}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
}

export default Step;
