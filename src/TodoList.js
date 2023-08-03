import React from "react";

import Task from "./Task";

const TodoList = ({ tasks }) => {
  const tasksEl = [];

  // Don't change the state in the same scope as the return!!!
  //setTasks([...tasks, 'Task 4']);

  React.useEffect(() => {
    console.log('useEffect called');

    const resizeCallback = () => {
      console.log('resized');
    }; 

    // DONT DO THIS!
    //window.onresize = resizeCallback;

    // DO THIS!!!
    window.addEventListener('resize', resizeCallback);

    const timer = setInterval(() => {
      //alert('5 secs later');
    }, 5000);

    // Cleanup function
    // Not always needed
    return () => {
      console.log('unmounted');
      clearInterval(timer);
      window.removeEventListener('resize', resizeCallback);
    }
  }, [tasks]);

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const taskEl = <Task>{task}</Task>;

    tasksEl.push(taskEl);
  }

  return (
    <ul>
      {tasksEl}
    </ul>
  );
};

export default TodoList;
