import React, {useState} from 'react';

function CreateForm(props) {
    const [task, setTask] = useState('')
    const addTask = () => {
        props.onCreateTask(task);
        setTask('')
    }
    return (
        <div className="App">
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addTask} disabled={task.trim() === ''}>Add</button>
        </div>
    );
}

export default CreateForm;
