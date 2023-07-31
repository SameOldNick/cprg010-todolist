import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  );
}

export default App;
