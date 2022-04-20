import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';

const App = () => (
  <Router>
    <div className="main">
      <Routes>
        <Route path="/list" element={<List />} />

        <Route index element={<Login />} />
      </Routes>
    </div>
  </Router>
);

export default App;
