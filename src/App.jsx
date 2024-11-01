import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../Blogsss/Blog/Home';
import List from '../../Blogsss/Blog/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;