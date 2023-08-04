import React from "react";
import { Button } from 'reactstrap';

import tasksData from '../data/tasks.json';

const TodoForm = (props) => {
  const { onTaskAdded } = props;

  const [errors, setErrors] = React.useState([]);
  //const [task, setTask] = React.useState('');

  const onFormSubmitted = (event) => {
    event.preventDefault();

    const value = event.target.task.value;

    const newErrors = [];

    // Testing logic
    if (value == '') {
      newErrors.push('Task cannot be empty.');
    } else if (value.trim() == '') {
      newErrors.push('Task cannot be whitespaces.');
    }

    setErrors(newErrors);
    
    if (newErrors.length == 0) {
      onTaskAdded(value);

    }
  };

  const ulStyles = {
    color: 'red'
  };

  const hasErrors = errors.length > 0 ? true : false;

  const errorEls = errors.map(
    (error, index) => <li key={index}>{error}</li>
  );
  

  const onTaskChanged = (event) => {
    const value = event.target.value;

    //setTask(value);

    const newErrors = [];

    // Testing logic
    if (value == '') {
      newErrors.push('Task cannot be empty.');
    } else if (value.trim() == '') {
      newErrors.push('Task cannot be whitespaces.');
    }

    setErrors(newErrors);
  }

  const generateRandomTask = () => {
    const tasksAry = tasksData.tasks;

    const randomIndex = (Math.random() * (tasksAry.length - 1)).toFixed(0);

    const randomTask = tasksAry[randomIndex];

    inputRef.current.value = randomTask;

    //alert(randomTask);
  }

  const inputRef = React.createRef();

  return (
    <form onSubmit={onFormSubmitted}>
      <input ref={inputRef} type="text" name="task" id="task" /*value={task}*/ onChange={onTaskChanged} />
      <button type="submit" className='btn btn-primary' disabled={hasErrors}>Add Task</button>

      <button type='button' className='btn btn-secondary' onClick={generateRandomTask}>Random Task</button>
      <Button color="dark" onClick={generateRandomTask}>Random Task</Button>

      <ul style={ulStyles}>
        {errorEls}
      </ul>
    </form>
  );
};

export default TodoForm;
