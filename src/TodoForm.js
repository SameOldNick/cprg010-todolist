import React from 'react';

const TodoForm = ({ onTaskAdded }) => {
    const onSubmit = (event) => {
        event.preventDefault();

        onTaskAdded(event.target.task.value);
    };

    return (
        <>
            <form onSubmit={onSubmit}>

                <label>
                    Task:
                </label>
                <input type='text' name='task' />
                <button type='submit'><strong>Submit</strong></button>
            </form>
        </>
    );
}

export default TodoForm;