import React from 'react';

interface ITaskForm {
    onAddTask: React.MouseEventHandler<HTMLFormElement>;
    onChangeText: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<ITaskForm> = props => {
    return (
        <div>
            <div className="form">
                <form onSubmit={props.onAddTask}>
                    <input className="input-message"
                           onChange={props.onChangeText}
                           type="text"
                           placeholder="Add new task"/>
                    <button type='submit' className="send-btn">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddTaskForm;