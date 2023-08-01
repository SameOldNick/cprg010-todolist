import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoCategory from './TodoCategory';

import logo from './images/logo.svg';

import './App.css';

const App = () => {

  

  return (
    <>
      <Header className='top-header' id='header' title='This is the header'>
        <h1>Joe Blow's Website 🚀🐨</h1>
        <img src={logo} width={55} height={55} />
      </Header>

      <TodoCategory title='Home' />
      <TodoCategory title='Work' />
      <TodoCategory title='School' />
      
      <Footer />
    </>
  );
}

export default App;
