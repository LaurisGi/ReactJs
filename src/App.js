import './App.css';
import { Header } from "../src/Header/Header"
import { Footer } from "../src/Footer/Footer"
import Employees from "../src/Employees/Employees"

function App() {

  return (
    <div className='App'>
      <Header/>
      <Employees/>
      <Footer/>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
    </div>
  );
}

export default App;
