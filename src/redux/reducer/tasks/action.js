import { FETCH_TASK, EDIT_TASK, DEL_TASK, ADD_TASK } from './actionTypes';
import axois from 'axios';
import { TASK_ADDRESS, CATE_ADDRESS } from '../../../utils/API';

export const getAllTask = () => {
    return (dispatch) => {
        axois.get(TASK_ADDRESS)
        .then(res => {
            dispatch({type: FETCH_TASK, payload: res.data})
        }).catch(err => {
            alert(err);
        })
    }
}

export const editTask = (task) => {
    return (dispatch) => {
        axois.put(TASK_ADDRESS + task.id, {
            id: task.id,
            content: task.content,
            title: task.title,
            status: task.status,
            categorisId: task.categorisId
        }).then( res => {
            dispatch({type: EDIT_TASK, payload: task})
        }).catch(err => {
            alert(err);
        })
    }
}

export const delTask = (id) => {
    return (dispatch) => {
        axois.delete(TASK_ADDRESS + id)
        .then( res => {
            dispatch({type: DEL_TASK, payload: id})
        }).catch(err => {
            alert(err);
        })
    }
}

export const addTask = (task) => {
    return (dispatch) => {
        axois.post(TASK_ADDRESS, task)
        .then( res => {
            dispatch({type: ADD_TASK, payload: task})
        }).catch(err => {
            alert(err);
        })
    }
}