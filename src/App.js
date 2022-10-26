import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { AboutPage } from './AboutPage/AboutPage'
import { HomePage } from './HomePage/HomePage'
import { ContactsPage } from './ContactsPage/ContactsPage'
import { Navigation } from './Navigation/Navigation'


function App() {

  return (
      <div className='App'>
<Navigation />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
        </Routes>
      </div>
  );
}

export default App;
