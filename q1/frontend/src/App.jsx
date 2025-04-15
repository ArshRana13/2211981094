import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TopUsers from './pages/TopUsers';
import Trending from './pages/Trending';
import Feed from './pages/Feed';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/top-users">Top Users</Link></li>
          <li><Link to="/trending">Trending</Link></li>
          <li><Link to="/feed">Feed</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
