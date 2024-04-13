import React from "react";

const Step = ({
  step,
  formData,
  setFormData,
  onNextStep,
  onPrevStep,
  onSubmit,
}) => {
  const { firstName, lastName, model, cardPrice, cardInfo, expireDate } =
    formData;
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  switch (step) {
    case 1:
      return (
        <div id="step1">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            id="first_name"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            id="last_name"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button onClick={onNextStep}>Next</button>
        </div>
      );
    case 2:
      return (
        <div id="step2">
          <input
            type="text"
            name="model"
            placeholder="model"
            value={model}
            id="model"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="cardPrice"
            placeholder="Car Price"
            value={cardPrice}
            id="car_price"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button onClick={onPrevStep}>Previous</button>
          <button onClick={onNextStep}>Next</button>
        </div>
      );
    case 3:
      return (
        <div id="step3">
          <input
            type="text"
            name="cardInfo"
            placeholder=""
            value={cardInfo}
            id="card_info"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="expireDate"
            placeholder="MM/YYYY"
            value={expireDate}
            id="expiry_date"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button onClick={onPrevStep}>Previous</button>
          <button onClick={(e) => onSubmit(e)}>Submit</button>
        </div>
      );
    default:
      break;
  }
};

export default Step;