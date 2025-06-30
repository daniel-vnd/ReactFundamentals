
import Hero from './component/Hero';

// 30. Managing Form Submit

const App = () => {

	const PostFormData = (event) => {
		event.preventDefault(); // will prevent the page to reload
	};

	return (
		<div>
			<form onSubmit={PostFormData}>
				<input placeholder="Name" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default App;