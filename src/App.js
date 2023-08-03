import React from 'react';

import './assets/App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import FunFactPage from './pages/FunFactPage';
import TodoListPage from './pages/TodoListPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='fun-fact' element={<FunFactPage />} />
          <Route path='todo-list' element={<TodoListPage />} />
          <Route index element={<Navigate to='/todo-list' />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
