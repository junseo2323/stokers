import axios from 'axios';
import { fetchQUESTRequest, fetchQUESTSuccess, fetchQUESTError } from './actions';

export const fetchQUEST = () => {
    return dispatch => {
        dispatch(fetchQUESTRequest());
        axios.get('http://localhost:8000/api/questlist/')
        .then(res => {
            dispatch(fetchQUESTSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUESTError(error));
        });
    };
}