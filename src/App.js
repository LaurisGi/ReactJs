import './App.css';
import { Greeting } from './Greeting/Greeting';

function App() {

  return (
    <>
      <Greeting isLoggedIn={false} unreadMessages={[1, 1, 1]} />
    </>
  );
}

export default App;
