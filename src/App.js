import { Provider } from 'react-redux';
import './App.css';
import Form from './Components/Form';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form/>
      </Provider>
    </div>
  );
}

export default App;
