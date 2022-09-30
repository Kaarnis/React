import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [age, setAge] = useState(0);
const [rate, setRate] = useState(0);
const [rate2, setRate2] = useState(0);

function laske(){
  setRate((220-age)*0.65);
  setRate2((220-age)*0.85);
}


  return (
    <form>
   <div>
      <h1>Heart rate limits calculator</h1>
        <label>Age</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits:</label>
          <output>{rate.toFixed(0)}-{rate2.toFixed(0)}</output>
        </div>
        <button type="button" onClick={laske}>Calculate</button>
    </form>

      );
}

      export default App;
