import './App.css';
import {Route} from 'react-router-dom';
import Form from './components/main/form.component';
import Admin from './components/admin/admin.component';

function App() {
  	return (
    	<div className="App">
      		<Route path="/" exact component={Form}/>
      		<Route path="/admin" component={Admin}/>
    	</div>
  );
}

export default App;
