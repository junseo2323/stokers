import axios from 'axios';
import { fetchQUESTRequest, fetchQUESTSuccess, fetchQUESTError } from './actions';

export const fetchQUEST = () => {
    const urls = "http://localhost:8000";
    return dispatch => {
        dispatch(fetchQUESTRequest());
        axios.get(urls+'/api/questlist/')
        .then(res => {
            dispatch(fetchQUESTSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUESTError(error));
        });
    };
}