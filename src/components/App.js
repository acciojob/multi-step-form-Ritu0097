// App.js
import React, { useState } from 'react';
import Step from './Step';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    model: '',
    carPrice: '',
    cardInfo: '',
    expiryDate: '',
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        <Step
          step={1}
          currentStep={currentStep}
          formData={formData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
        />
        <Step
          step={2}
          currentStep={currentStep}
          formData={formData}
          handleInputChange={handleInputChange}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
        <Step
          step={3}
          currentStep={currentStep}
          formData={formData}
          handleInputChange={handleInputChange}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

export default App;