import { useState } from 'react';

// 43. [Hook] useState - working with imutable array - part 2

const App = () => {

	const [list, setList] = useState(['a', 'b']);
	
	const [item, setItem] = useState("");
		
	const AddToList = () => {
		list.push(item);
		
		setList([...list]);
	}
	
	const RemoveItem = (index) => {
		alert(index);
		list.splice(index, 1);

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
										<td><button onClick={()=>{
											RemoveItem(index);
										}}>Remove</button></td>
									</tr>
								)
							})
							
							
						) : (<tr></tr>)
					}
				</tbody>
			</table>
			<p>Item: {item}</p>
			<p>List length: {list.length}</p>
			<input placeholder='Item' onChange={(e) => setItem(e.target.value)} />
			<button onClick={AddToList}>Change</button>
		</div>
	)
};

export default App;