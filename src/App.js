import React, {useState} from 'react';

import './App.css';
import ToDolist from "./Components/ToDoList";
import CreateForm from "./Components/CreateForm";


function App() {
    const initialState = [
        {
            id: 1, name: 'Get up', done: true,
        }, {
            id: 2, name: 'Call the wife', done: false,
        }, {
            id: 3, name: 'Take exercises', done: true,
        },];

    const [todos, setTodos] = useState(initialState)
    const onCreateTask = (task) => {
        const updatedTodos = [...todos];
        updatedTodos.push({id: Math.random(), name: task, done: false,});
        setTodos(updatedTodos);
    };
    const onDeleteTask = (id) => {
        const updatedTodos = todos.filter(el => el.id !== id);
        setTodos(updatedTodos);
    }
    const onDoneTaskToggle = (id) => {
        const updatedTodos = todos.map(el => {
            return el.id === id ? {...el, done: !el.done} : el
        });
        setTodos(updatedTodos)
    };
    const onSaveTask = (task) => {
        const updatedTodos = todos.map(el => {
            return el.id === task.id ? {...el, name: task.name}
                : el;
        });
        setTodos(updatedTodos)
    }
    return (
        <div className="App">
            <h1>To do List</h1>
            <CreateForm onCreateTask={onCreateTask}/>
            <hr/>
            <h2>Total:{todos.length}</h2>
            <h3>Done: {todos.filter(el => el.done).length}</h3>
            <h3>Undone: {todos.filter(el => !el.done).length}</h3>
            <ToDolist todos={todos} onDeleteTask={onDeleteTask} onDoneTaskToggle={onDoneTaskToggle}
                      onSaveTask={onSaveTask}/>
        </div>
    );
}

export default App;
