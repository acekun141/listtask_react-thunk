import { FETCH_CATE, ADD_CATE, DEL_CATE } from './actionTypes'; 
import axois from 'axios';
import { CATE_ADDRESS } from '../../../utils/API';

export const getAllCate = () => {
    return (dispatch) => {
        axois.get(CATE_ADDRESS)
        .then(res => {
            dispatch({type: FETCH_CATE, payload: res.data})
        }).catch( err => {
            alert(err);
        });
    }
}

export const addCate = (cate) => {
    return (dispatch) => {
        axois.post(CATE_ADDRESS, cate)
        .then(res => {
            dispatch({type: ADD_CATE, payload: cate})
        }).catch(err => {
            alert(err);
        })
    }
}

export const delCate = (id) => {
    return (dispatch) => {
        axois.delete(CATE_ADDRESS + id)
        .then(res => {
            dispatch({type: DEL_CATE, payload: id})
        }).catch(err => {
            alert(err);
        })
    }
}