import './App.css';
import { Counter } from './Counter/Counter'
import { useState } from 'react'

function App() {
  const [isCounterVisible, setIsCounterVisible] = useState();
  const handleToggleCounter = () => {
    setIsCounterVisible(!isCounterVisible);
  }

  return (
    <div className='App'>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
      {isCounterVisible && <Counter />}
    </div>
  );
}

export default App;
