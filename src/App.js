import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import logo from './images/logo.svg';

import './App.css';

const App = () => {
  const onTaskAddedCallback = (task) => {
    alert(task);
    debugger;
  };

  return (
    <>
      <Header className='top-header' id='header' title='This is the header'>
        <h1>Joe Blow's Website 🚀🐨</h1>
        <img src={logo} width={55} height={55} />
      </Header>
      <TodoForm onTaskAdded={onTaskAddedCallback} />
      <TodoList />
      <Footer />
    </>
  );
}

export default App;
