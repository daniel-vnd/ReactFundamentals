import { useState } from 'react';

// 46. [Hook] useState - managing like pro part 2

const App = () => {

	let [formObject, setFormObject] = useState({fName:"",lName:"",city:"",gender: ""});

	const InputOnChange = (property, value) => {
		setFormObject((previousObj) => ({
			...previousObj, 
			[property]: value
		}));
	}
	
	const FormSubmit = (e) => {
		e.preventDefault();
		
		console.log(formObject);
	}
	
	return (
		<div className='container'>
		<form onSubmit={FormSubmit}>
			<input onChange={(e) => {InputOnChange("fName", e.target.value)}} value={formObject.fName} placeholder='First Name' />
			<input onChange={(e) => {InputOnChange("lName", e.target.value)}} value={formObject.lName} placeholder='Last Name' />
			<select onChange={(e) => {InputOnChange("city", e.target.value)}} value={formObject.city}>
				<option value="">Choose City</option>
				<option value="Rajbari">Rajbari</option>
				<option value="Dhaka">Dhaka</option>
			</select>
			<input onChange={() => {InputOnChange("gender", "Male")}} checked={formObject.gender === "Male"} type="radio" name="gender" /> Male
			<input onChange={() => {InputOnChange("gender", "Female")}} checked={formObject.gender === "Female"} type="radio" name="gender" /> Female
			<br />
			<button type='submit'>Submit</button>
		</form>
		</div>
	)
};

export default App;