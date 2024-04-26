import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Tiya" /> */}
      <Greeting name="ramesh"/>

    </div>
  );
}

export default App;
