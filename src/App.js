import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from './Navigation/Navigation'
import { PageLayout } from './PageLayout';
import { RouteSuspense } from './RouteSuspense/RouteSuspense';

import './App.css';


const HomePage = React.lazy(() => import('./HomePage/HomePage'));
const ContactsPage = React.lazy(() => import('./ContactsPage/ContactsPage'));
const AboutPage = React.lazy(() => import('./AboutPage/AboutPage'));
const LoginPage = React.lazy(() => import('./LoginPage/LoginPage'));

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => setUser({ username });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout user={user} />}>
          <Route index element={
            <RouteSuspense>
              <HomePage />
            </RouteSuspense>
          } />
          <Route path="/contacts" element={
            <RouteSuspense>
              <ContactsPage />
            </RouteSuspense>
          } />
          <Route path="/about" element={
            <RouteSuspense>
              <AboutPage />
            </RouteSuspense>
          } />
        </Route>
        <Route path="/login" element={
          <RouteSuspense>
            <LoginPage onLogin={handleLogin} />
          </RouteSuspense>
        } />
      </Routes>
    </div>
  );
}

export default App;