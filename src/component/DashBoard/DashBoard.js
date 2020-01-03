import React, { useState } from 'react';
import UnTask from './UnTask';
import ComTask from './ComTask';
import Task from './Task';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdTrash } from 'react-icons/io';
import { delCate } from '../../redux/reducer/cates/action';

const DashBoard = ({chooseCate, setChooseCate}) => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const [task, setTask] = useState(null);
    const [form, setForm] = useState(null);

    const cate = useSelector(state => state.cates).find(cate => cate.id == chooseCate)

    const handleInput = (value) => {
        setSearch(value);
    }

    const clickDelCate = () => {
        dispatch(delCate(chooseCate));
        setChooseCate(null);
    }

    return (
        <div className='DashBoard'>
            <h2>{cate.name}</h2>
            <input type='text' placeholder='Search Task'
                   value={search}
                   onChange={e => handleInput(e.target.value)} />
            <button className='del-cate' onClick={() => clickDelCate()}>
                <IoMdTrash size={20} />
            </button>
            <div className='row'>
                <UnTask search={search} chooseCate={chooseCate} setForm={setForm} setTask={setTask} />
                <ComTask search={search} chooseCate={chooseCate} setTask={setTask} setForm={setForm} />
                {task ? <Task taskId={task} chooseCate={chooseCate} setTask={setTask} /> : null}
                {form ? <Form setForm={setForm} chooseCate={chooseCate} /> : null }
            </div>
        </div>
    )
}

export default DashBoard;