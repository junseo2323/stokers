import axios from 'axios';
import { fetchQUIZRequest, fetchQUIZSuccess, fetchQUIZError } from './actions';

export const fetchQUIZ = (id) => {
    const urls = "http://localhost:8000";
    return dispatch => {
        dispatch(fetchQUIZRequest(id));
        axios.get(urls+'/api/quizlist/'+id)
        .then(res => {
            dispatch(fetchQUIZSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUIZError(error));
        });
    };
}