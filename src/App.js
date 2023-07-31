import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import logo from './images/logo.svg';

import './App.css';

const App = () => {
  const [tasks, setTasks] = React.useState([]);

  const onTaskAddedCallback = (task) => {
    // Long way:
    /*const newTasks = tasks;

    newTasks.push(task);

    setTasks(newTasks);*/

    // Short way:
    setTasks([...tasks, task]);

  };

  // Long way:
  /*const items = [];

  for (const task of tasks) {
    const item = <li>{task}</li>;
    items.push(item);
  }*/

  return (
    <>
      <Header className='top-header' id='header' title='This is the header'>
        <h1>Joe Blow's Website 🚀🐨</h1>
        <img src={logo} width={55} height={55} />
      </Header>
      <TodoForm onTaskAdded={onTaskAddedCallback} />
      <TodoList>
        {/*items*/}
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
      </TodoList>
      <Footer />
    </>
  );
}

export default App;
