import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/pages/Home';
import { UserLists } from './component/pages/UserLists';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/UserLists'
            element={<UserLists />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
