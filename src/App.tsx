import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Stories from './pages/Stories';
import WriteStory from './pages/WriteStory';
import About from './pages/About';
import Leaderboard from './pages/Leaderboard';
import Social from './pages/Social';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-amber-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/write" element={<WriteStory />} />
            <Route path="/about" element={<About />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;