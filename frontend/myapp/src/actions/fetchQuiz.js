import axios from 'axios';
import { fetchQUIZRequest, fetchQUIZSuccess, fetchQUIZError } from './actions';

export const fetchQUIZ = (id) => {
    return dispatch => {
        dispatch(fetchQUIZRequest(id));
        axios.get('http://localhost:8000/api/quizlist/'+id)
        .then(res => {
            dispatch(fetchQUIZSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUIZError(error));
        });
    };
}