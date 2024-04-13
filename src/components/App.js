import React, { useState } from "react";
import "./../styles/App.css";
import Step from "./Step";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    model: "",
    cardPrice: "",
    cardInfo: "",
    expireDate: "",
  });
  const [step, setStep] = useState(1);
  const onNextStep = () => {
    setStep(step + 1);
  };
  const onPrevStep = () => {
    setStep(step - 1);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <Step
        step={step}
        formData={formData}
        setFormData={setFormData}
        onNextStep={onNextStep}
        onPrevStep={onPrevStep}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default App;