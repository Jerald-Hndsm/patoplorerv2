import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Layout from './components/Layout';
import Forecasting from './pages/Forecasting';
import EggInventory from './pages/EggInventory';
import Statistics from './pages/Statistics';
import MainDashboard from './pages/MainDashboard';

const App = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/" />}>
          <Route path="/forecasting" element={<Forecasting />} />
          <Route path="/egg-inventory" element={<EggInventory />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/dashboard" element={<MainDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
