import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';

const SideBar = ({ getChooseCate }) => {
    const [search, setSearch] = useState('');
    const [form, setForm] = useState(null);

    const list_cate = useSelector(state => {
        return state.cates;
    });
   
    const list = list_cate.filter(cate => cate.name.includes(search));

    const handleInput = (value) => {
        setSearch(value);
    }

    return (
        <div className='SideBar'>
            <h3>Task List</h3>
            <input type='text' placeholder='Search Task'
                   value={search}
                   onChange={(e) => handleInput(e.target.value)} />
            <div className='cate-list'>
                {list.map(cate => {
                    return (
                        <div className='cate-list__item' key={cate.id}
                        onClick={() => getChooseCate(cate.id)}>
                            <div className='item__title'>{cate.name}</div>
                        </div>
                    )
                })}
            </div>
            {form ? <Form setForm={setForm} /> : null}
            <button className='show-cate-form' onClick={() => setForm(true)}>New +</button>
        </div>
    );
};

export default SideBar;;