import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addCate } from '../../redux/reducer/cates/action';

const Form = ({setForm}) => {
    
    const dispatch = useDispatch();

    const [newCate, setNewCate] = useState('');

    const onChange = (target) => {
        setNewCate(target.value);
    }

    const clickAdd = () => {
        if (!!newCate) {
            let new_cate = {id: uuid(), name: newCate};
            dispatch(addCate(new_cate));
            setForm(null);            
        } else {
            alert("Khong hop le!");
        }

    }

    return (
        <div className='module-cateform'>
            <input type='text'
                placeholder='Add new one'
                value={newCate}
                onChange={(e) => onChange(e.target)} />
            <div className='module-button'>
                <button onClick={() => setForm(null)} >Cancel</button>
                <button onClick={() => clickAdd()}>Add</button>
            </div>
        </div>

    );
};

export default Form;