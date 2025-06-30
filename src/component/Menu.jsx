import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<div>
			<ul>
				<li>
					<NavLink to="/" className={({isActive}) => isActive ? "active-item" : "pending-item"}>Home</NavLink>
					<NavLink to="/about" className={({isActive}) => isActive ? "active-item" : "pending-item"}>About</NavLink>
					<NavLink to="/contact" className={({isActive}) => isActive ? "active-item" : "pending-item"}>Contact</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;