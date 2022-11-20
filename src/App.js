import './App.css';
import Navigation from './components/Navigation';
import ItemList from './components/ItemList';
// 6 - IMPORTAMOS EL PROVIDER Y ENVOLVEMOS NUESTRA APP
import { ItemsProvider } from './ItemsContext';

const App = () => {
	return (
		<ItemsProvider>
			<div className='App'>
				<Navigation />
				<ItemList />
			</div>
		</ItemsProvider>
	);
};

export default App;
