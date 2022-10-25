import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('COMPONENT MOUNTED');
  }, [count]);

  const handleIncrement = (event) => {
    console.log(event);
  }

  const handleIncrementKeyDown = (event) => {
    console.log(event);
  }

  const handleIncrementKeyUp = (event) => {
    console.log(event);
  }
  const handleInputChange = (event) => {
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMIT');
  }

  const handleInputBlur = (event) => {
    console.log('INPUT LOST FOCUS')
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className='App'>
        {count}
        <button
          onKeyUp={handleIncrementKeyUp}
          onKeyDown={handleIncrementKeyDown}
          onClick={handleIncrement}
          >
          Increment</button>
          <input onChange={handleInputChange} onBlur={handleInputBlur}/>
      </div>
    </form>
  );
}

export default App;
