import './App.css';
import { useState } from 'react';
import Carro from './Carro'

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Carro contador={count} carro="fusca" ano="1988" />
        <button onClick={() => {setCount(count+1)}}>Count: {count}</button>
      </header>
    </div>
  );
}

export default App;
