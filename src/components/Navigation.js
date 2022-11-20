import React, { useCallback, useContext } from 'react';
import { ItemsContext } from '../ItemsContext';

import './Navigation.css';

const Navigation = () => {
	const [items, setItems] = useContext(ItemsContext);
	return (
		<nav className='Navbar'>
			<h1>E-commerce</h1>
			<p>Items: {items.length}</p>
		</nav>
	);
};

export default Navigation;
