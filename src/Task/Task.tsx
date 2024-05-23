import React from 'react';


interface ITaskProps {
    text: string;
    onRemoveTask: React.MouseEventHandler;
    checked: boolean | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Task: React.FC<ITaskProps> = (props) => {
    return (
        <div className='task-wrap'>
            <p className='task'>{props.text}</p>
            <div className='side-wrap'>
                <input className='checkbox'
                       type='checkbox'
                       checked={props.checked}
                       onChange={props.onChange}/>
                <button className='del-btn'
                        onClick={props.onRemoveTask}/>
            </div>
        </div>
    );
};

export default Task;