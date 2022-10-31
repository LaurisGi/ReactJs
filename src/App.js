import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { AboutPage } from './AboutPage/AboutPage'
import { HomePage } from './HomePage/HomePage'
import { ContactsPage } from './ContactsPage/ContactsPage'
import { Navigation } from './Navigation/Navigation'
import { PageLayout } from './PageLayout'
import { LoginPage } from './LoginPage/LoginPage'
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ username: 'Petras123'})
  const handleLogout = () => setUser(null);

  return (
      <div className='App'>
        <Navigation onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<PageLayout user={user} onLogout={handleLogout}/>}>
            <Route index element={<HomePage/>} />
            <Route path="/contacts" element={<ContactsPage/>} />
          </Route>
          <Route path="/Login" element={<LoginPage onLogin={handleLogin} />}/>
        </Routes>
      </div>
  );
}

export default App;
