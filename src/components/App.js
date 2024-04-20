import React, { useState } from 'react'

const App = () => {
	const [currentStep, setCurrentStep] = useState(1)
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		model: '',
		car_price: '',
		card_info: '',
		expiry_date: ''
	})

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value })
	}

	const nextStep = () => {
		setCurrentStep(currentStep + 1)
	}

	const prevStep = () => {
		setCurrentStep(currentStep - 1)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Perform form submission logic here
		console.log(formData)
	}

	return (
		<div>
			<h1>Multi-Step Form</h1>
			<Step
				currentStep={currentStep}
				handleInputChange={handleInputChange}
				formData={formData}
				nextStep={nextStep}
				prevStep={prevStep}
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}
const Step = ({
	currentStep,
	handleInputChange,
	formData,
	nextStep,
	prevStep,
	handleSubmit
}) => {
	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<>
						<input
							type="text"
							id="first_name"
							placeholder="First Name"
							value={formData.first_name}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							id="last_name"
							placeholder="Last Name"
							value={formData.last_name}
							onChange={handleInputChange}
						/>
					</>
				)
			case 2:
				return (
					<>
						<input
							type="text"
							id="model"
							placeholder="Car Model"
							value={formData.model}
							onChange={handleInputChange}
						/>
						<input
							type="number"
							id="car_price"
							placeholder="Car Price"
							value={formData.car_price}
							onChange={handleInputChange}
						/>
					</>
				)
			case 3:
				return (
					<>
						<input
							type="text"
							id="card_info"
							placeholder="Card Information"
							value={formData.card_info}
							onChange={handleInputChange}
						/>
						<input
							type="text"
							id="expiry_date"
							placeholder="Expiry Date"
							value={formData.expiry_date}
							onChange={handleInputChange}
						/>
					</>
				)
			default:
				return null
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			{renderStep()}
			{currentStep > 1 && (
				<button type="button" onClick={prevStep}>
					Previous
				</button>
			)}
			{currentStep < 3 && (
				<button type="button" onClick={nextStep}>
					Next
				</button>
			)}
			{currentStep === 3 && <button type="submit">Submit</button>}
		</form>
	)
}
export default App
