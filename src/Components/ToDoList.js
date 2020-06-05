import React, {useState} from 'react';


function ToDolist(props) {
    const [taskEdit, setTaskEdit] = useState({});
    const editMode = (task) => {
        setTaskEdit(task);
    };
    const onEditTaskChange = (e) => {
        setTaskEdit({...taskEdit, name: e.target.value});
    };
    const taskSave = () => {
        props.onSaveTask(taskEdit);
        setTaskEdit({});
    };
    return (
        <div className="App">
            {
                props.todos.map(el =>
                    <li key={el.id}>
                        {el.done ? '✅' : '❌'}
                        {
                            taskEdit.id === el.id
                                ? <>
                                    <input type="text" value={taskEdit.name} onChange={onEditTaskChange}/>
                                    <button onClick={taskSave} disabled={taskEdit.name.trim() === ''}>Save</button>
                                </>
                                : <span onClick={()=> editMode(el)}>{el.name}</span>
                            }
                            <button onClick={() => props.onDeleteTask(el.id)}>Delete</button>
                            <button onClick={() => props.onDoneTaskToggle(el.id)}>{el.done ? 'Undone' : 'Done'}</button>
                            </li>
                            )
                            }
                            </div>
                            );
                            }

                            export default ToDolist;
