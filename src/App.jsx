import { useState } from 'react';

// 43. [Hook] useState - working with imutable array

const App = () => {
	const [list, setList] = useState(['a', 'b']);
	
	const [item, setItem] = useState("");
		
	const AddToList = () => {
		list.push(item);
		
		setList([...list]);
	}
		
	return (
		<div>
			<table>
				<tbody>
					{
						list.length !== 0 ? (
							list.map((element, index) => {
								return (
									<tr>
										<td>{element}</td>
										<td><button>Remove</button></td>
									</tr>
								)
							})							
						) : (<tr></tr>)
					}
				</tbody>
			</table>
			<p>{item}</p>
			<p>{list.length}</p>
			<input placeholder='Item' onChagne={(e) => setItem(e.target.value)} />
			<button onClick={AddToList}>Change</button>
		</div>
	)
};

export default App;