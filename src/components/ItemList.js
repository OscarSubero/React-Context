// ME TRAIGO EL USECONTEXTHOOK
// ME TRAIGO EL CONTEXTO CREADO: ITEMSCONTEXT
import React, { useContext } from 'react';
import { ItemsContext } from '../ItemsContext';

import Item from './Item';

const ItemList = () => {
	const [items, setItems] = useContext(ItemsContext);
	return (
		<div>
			<h1>Items List</h1>
			{items.map((item) => (
				<div>
					<Item data={item} />
				</div>
			))}
		</div>
	);
};

export default ItemList;
