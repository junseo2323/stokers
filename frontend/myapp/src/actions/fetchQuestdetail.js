import axios from 'axios';
import { fetchQUESTDETAILRequest, fetchQUESTDETAILSuccess, fetchQUESTDETAILError } from './actions';

export const fetchQUESTDETAIL = (id) => {
    return dispatch => {
        dispatch(fetchQUESTDETAILRequest());
        axios.get('http://localhost:8000/api/questlist/'+id)
        .then(res => {
            dispatch(fetchQUESTDETAILSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUESTDETAILError(error));
        });
    };
}