// Step.js
import React from 'react';

function Step({
  step,
  currentStep,
  formData,
  handleInputChange,
  handleNext,
  handlePrevious,
  handleSubmit,
}) {
  return (
    <div>
      {currentStep === step && (
        <div>
          {step === 1 && (
            <div>
              <label htmlFor="first_name">First Name:</label>
              <input
                type="text"
                id="first_name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <label htmlFor="last_name">Last Name:</label>
              <input
                type="text"
                id="last_name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {step !== 1 && (
                <button onClick={handlePrevious}>Previous</button>
              )}
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 2 && (
            <div>
              <label htmlFor="model">Car Model:</label>
              <input
                type="text"
                id="model"
                value={formData.model}
                onChange={handleInputChange}
              />
              <label htmlFor="car_price">Car Price:</label>
              <input
                type="number"
                id="car_price"
                value={formData.carPrice}
                onChange={handleInputChange}
              />
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 3 && (
            <div>
              <label htmlFor="card_info">Card Information:</label>
              <input
                type="text"
                id="card_info"
                value={formData.cardInfo}
                onChange={handleInputChange}
              />
              <label htmlFor="expiry_date">Expiry Date:</label>
              <input
                type="text"
                id="expiry_date"
                value={formData.expiryDate}
                onChange={handleInputChange}
              />
              <button onClick={handlePrevious}>Previous</button>
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Step;