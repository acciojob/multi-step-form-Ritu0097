// App.js
import React, { useState } from 'react'
import Step from './Step'
import './App.css'

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

	const handleNextStep = () => {
		setCurrentStep(currentStep + 1)
	}

	const handlePrevStep = () => {
		setCurrentStep(currentStep - 1)
	}

	const handleSubmit = () => {
		// Handle form submission, e.g., sending data to server
		console.log('Form submitted:', formData)
	}

	return (
		<div className="container">
			<h1>Multi-Step Form</h1>
			<Step
				step={currentStep}
				formData={formData}
				setFormData={setFormData}
				onNext={handleNextStep}
				onPrev={handlePrevStep}
				onSubmit={handleSubmit}
			/>
		</div>
	)
}

export default App
