import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ComTask = ({search, setTask, chooseCate, setForm}) => {

    const tasks = useSelector(state => state.tasks)
                  .filter(task => task.categorisId == chooseCate)
                  .filter(task => task.status);

    const get_tasks = tasks.filter(task => task.title.includes(search) > 0);

    return (
        <div className='col'>
            <div className='list list-complete'>
                <p>Complete</p>
                <p>{get_tasks.length}</p>
            </div>
            <div className='task-list'>
                {get_tasks.map(task => {
                    return (
                        <div className='task-list__item' key={task.id}>
                            <button onClick={() => {setTask(task.id);setForm(null)}}>{task.title}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ComTask;