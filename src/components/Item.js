import React from 'react';

const Item = ({ data }) => {
	return (
		<div style={{ backgroundColor: 'yellow' }}>
			<h1>Item</h1>
			<p style={{ color: 'black' }}>
				{data.name} price: ${data.price}
			</p>
		</div>
	);
};

export default Item;
