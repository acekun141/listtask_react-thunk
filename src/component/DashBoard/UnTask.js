import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask } from '../../redux/reducer/tasks/action';

const UnTask = ({search, chooseCate, setTask, setForm}) => {

    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks)
                  .filter(task => task.categorisId == chooseCate)
                  .filter(task => !task.status);

    const get_tasks = tasks.filter(task => task.title.includes(search) > 0);

    const toogleStatus = (id) => {
        let task = Object.assign({}, {...tasks.find(task => task.id == id)}, {status:true})
        dispatch(editTask(task));
    }

    return (
        <div className='col'>
            <div className='list list-uncomplete'>
                <p>To do</p>
                <p>{get_tasks.length}</p>
            </div>
            <div className='task-list'>
                {get_tasks.map(task => {
                    return (
                        <div className='task-list__item' key={task.id}>
                            <button onClick={() => {setTask(task.id);setForm(null)}}>{task.title}</button>
                            <button onClick={() => toogleStatus(task.id)}></button>
                        </div>
                    )
                })}
                
            </div>
            <button className='add-task' onClick={() => {setForm(true);setTask(null)}}>Add New +</button>
        </div>
    );
};

export default UnTask;