import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";
import {nanoid} from "nanoid";


const App = () => {
    interface ICheckbox {
        checked: boolean;
        id: string;
        text: string;
    }
    const [tasks, setTasks] = useState<ICheckbox []>([
        {text: 'Сделать домашнее задание', checked: false, id: '123'},
        {text: 'Съездить на работу', checked: false, id: '12323'},
        {text: 'Купить домой продукты', checked: false, id: '442421'},
    ]);

    const [currentTask, setCurrentTask] = useState('');
    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };

    const addTask = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTask = {
            id: nanoid(),
            text: currentTask,
            checked: false
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id: string) => {
        const taskCopy = [...tasks];
        const index = tasks.findIndex(task => task.id === id);
        taskCopy.splice(index, 1);
        setTasks(taskCopy);
    };

    const changeCheckbox = (id: string) => {
        const taskCopy = [...tasks];
        const index = taskCopy.findIndex(task => task.id === id);
        taskCopy[index].checked = !taskCopy[index].checked;
        setTasks(taskCopy);
    };

    return (
        <div className="App">
            <div className='todo-wrap'>
                <h2>To Do List:</h2>
                <AddTaskForm onAddTask={event => addTask(event)}
                             onChangeText={event => changeText(event)}
                />
                {tasks.map((task) => (
                    <Task text={task.text}
                          onRemoveTask={() => removeTask(task.id)}
                          key={task.id}
                          checked={task.checked}
                          onChange={() => changeCheckbox(task.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
