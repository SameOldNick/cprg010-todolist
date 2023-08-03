import React from 'react';

const Task = (props) => {
    const { children } = props;

    const [completed, setCompleted] = React.useState(false);

    const onCompletedChanged = (event) => {
        //console.log(event);

        const isChecked = event.target.checked;

        setCompleted(isChecked);
    };

    console.log(completed);

    const taskStyle = {
        textDecoration: completed ? 'line-through' : 'none'
    }

    return (
        <>
            <li>
                <span style={taskStyle}>{children}</span>
                <input type='checkbox' name='completed' onChange={onCompletedChanged} />
            </li> 
        </>
    );
}

export default Task;