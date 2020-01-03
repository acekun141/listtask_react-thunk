import React, { useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import DashBoard from './DashBoard/DashBoard';
import { useDispatch } from 'react-redux';
import { getAllCate } from '../redux/reducer/cates/action';
import { getAllTask } from '../redux/reducer/tasks/action';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCate());
        dispatch(getAllTask());
    }, [])

    const [chooseCate, setChooseCate] = useState(null);

    const getChooseCate = (id) => {
        setChooseCate(id);
    }

    return (
        <div className='TaskList container-fluid'>
            <div className='row'>
                <div className='col col-sidebar'>
                    <SideBar getChooseCate={getChooseCate} />
                </div>
                <div className='col col-dashboard'>
                    {chooseCate ? <DashBoard chooseCate={chooseCate} setChooseCate={setChooseCate} /> : null}
                </div>
            </div>
        </div>
    )
}

export default App;