import React from 'react';
import { ThemeContext } from './ThemeContext';

const Task = (props) => {
    const { children } = props;

    const { theme } = React.useContext(ThemeContext);

    const [completed, setCompleted] = React.useState(false);

    const onCompletedChanged = (event) => {
        //console.log(event);

        const isChecked = event.target.checked;

        setCompleted(isChecked);
    };

    console.log(completed);

    const taskStyle = {
        textDecoration: completed ? 'line-through' : 'none',
        color: theme === 'light' ? 'black' : 'white'
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