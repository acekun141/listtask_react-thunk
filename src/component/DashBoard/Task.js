import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask, delTask } from '../../redux/reducer/tasks/action';
import { IoMdTrash, IoMdClose } from 'react-icons/io';

const Task = ({taskId, chooseCate, setTask }) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setConent] = useState('');

    const task = useSelector(state => state.tasks).find(task => task.id == taskId);

    useEffect(() => {
        setTitle(task.title);
        setConent(task.content);
    }, [task.title, task.content])

    const handleChange = (target) => {
        if (target.name === 'title') {
            setTitle(target.value);
        } else if (target.name == 'content') {
            setConent(target.value);
        }
    }

    const handleSubmit = (title, content) => {
        if (!!title) {
            let new_task = Object.assign({}, {...task}, {title, content});
            dispatch(editTask(new_task));            
        } else {
            alert("Thieu tieu de!");
        }

    }

    const toogleStatus = () => {
        let new_task = Object.assign({}, {...task}, {status: !task.status});
        dispatch(editTask(new_task));
    }

    const delClick = () => {
        dispatch(delTask(task.id));
        setTask(null);
    }

    return (
        <div className='col'>
            <div className='module-task'>
                <div className='module-header'>
                    <div className='task-button'>
                        <button 
                          className={'mark-complete ' + task.status}
                          onClick={() => toogleStatus()}>
                            {task.status ? 'Complete' : 'Mark Complete'}
                        </button>
                        <button 
                          className='task-del'
                          onClick={() => delClick()}>
                              <IoMdTrash size={20} />
                        </button>
                        <button 
                          className='task-close'
                          onClick={() => setTask(null)}>
                              <IoMdClose size={20} />
                        </button>
                    </div>
                </div>
                <div className='module-content'>
                    <input type='text'
                      className='task-title'
                      name='title'
                      value={title}
                      onChange={(e) => handleChange(e.target)}/>
                    <textarea type='text'
                      className='task-content'
                      name='content'
                      value={content}
                      onChange={(e) => handleChange(e.target)}></textarea>
                    <button onClick={() => handleSubmit(title, content)}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Task;