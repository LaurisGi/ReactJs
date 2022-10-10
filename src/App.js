import logo from './logo.svg';
import './App.css';
import { Test } from './Test/Test' //! 1.1 pridetas test.js;
import { Button } from './Button/Button'; 
import { Header } from './Header/Header'; 

function App() {

  return (
    <div className="App">
      <Header />
      <Test />
      {/* //! 1.1 */}
      <Button text="click me!" />
      <Button text="paspausk mane"/>
      <Button>Click ME!</Button>
    </div>
  );
}

export default App;
