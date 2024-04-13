import React, { useState } from 'react';
import Step from './Step';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted with data:', formData);
  };

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <Step
            id="step1"
            step={step}
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );
      case 2:
        return (
          <Step
            id="step2"
            step={step}
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );
      case 3:
        return (
          <Step
            id="step3"
            step={step}
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStepComponent()}
    </div>
  );
}

export default App;
