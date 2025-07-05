import { useState } from 'react';

// 45. [Hook] useState - managing like pro part 1

const App = () => {
	let [formObject, setFormObject] = useState({fName:"",lName:"",city:"",gender: ""});
	
	return (
		<div className='container'>
		<form action="">
			<input value={formObject.fName} placeholder='First Name' />
			<input value={formObject.lName} placeholder='Last Name' />
			<select value={formObject.city}>
				<option value="">Choose City</option>
				<option value="Rajbari">Rajbari</option>
				<option value="Dhaka">Dhaka</option>
			</select>
			<input checked={formObject.gender === "Male"} type="radio" name="gender" /> Male
			<input checked={formObject.gender === "Female"} type="radio" name="gender" /> Female
			<br />
			<button type='submit'>Submit</button>
		</form>
		</div>
	)
};

export default App;