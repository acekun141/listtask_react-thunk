import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/reducer/tasks/action';
import { IoMdClose } from 'react-icons/io';

const Form = ({chooseCate, setForm}) => {

    const dispatch = useDispatch();
    
    const [newTask, setNewTask] = useState({title:'', content:''})

    const onChange = (target) => {
        setNewTask(Object.assign({}, newTask, {
                [target.name]: target.value
        }));
        // if (target.name == 'title') {
        //     setNewTask(Object.assign({}, newTask, {
        //         title: target.value
        //     }));
        // } else if (target.name == 'content') {
        //     setNewTask(Object.assign({}, newTask, {
        //         content: target.value
        //     }));
        // }
    }


    const createNew = () => {
        console.log(newTask);
        if (!!newTask.title) {
            let new_task = {...newTask, id: uuid(), categorisId: chooseCate, status: false};
            dispatch(addTask(new_task));
            setForm(null);
        } else {
            alert("Thieu tieu de!");
        }
    }

    return (
        <div className='col'>
            <div className='module-form'>
                <button className='form-close' onClick={() => setForm(null)}>
                    <IoMdClose size={20} />
                </button>
                <div className='form'>
                    <input type='text'
                           placeholder='Title'
                           value={newTask.title}
                           name='title'
                           onChange={(e) => onChange(e.target)}/>
                    <textarea type='text'
                              placeholder='Content'
                              value={newTask.content}
                              name='content'
                              onChange={(e) => onChange(e.target)} ></textarea>
                    <button onClick={() => createNew()}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Form;