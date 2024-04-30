import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import { FirstComponent } from './components/MyComponents';
import { SrcondComponent } from './components/MyComponents';
import HelloWorld from './components/HelloWorld';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import contact from './components/contact';

function App() {
  
  const [counter, setCounter] = useState(0);
  const increment=()=>{
    setCounter(counter+1)
    console.log(counter)
  }


  useEffect(()=>{
    document.title = `clicked ${counter} times`
  },[counter])



  return (
    <div className="App">
      <Router>
      <nav >
        <link to='/' className='text'>home</link>
        <link to='/contact' className='text'>contact</link>
        <link to='/about' className='text'>about</link>
      </nav>
      {/* <Welcome name="Tiya" /> */}
      {/* <Greeting name="ramesh"/> */}
      {/* <FirstComponent/>
      <SrcondComponent/> */}
      <HelloWorld/>
      <button onClick={increment}>click me!!</button>
       <h1>{counter}</h1>

       <Route path='/contact' Component={contact}/>
       </Router>
    </div>
  );
}

export default App;
