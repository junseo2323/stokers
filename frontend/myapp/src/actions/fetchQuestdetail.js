import axios from 'axios';
import { fetchQUESTDETAILRequest, fetchQUESTDETAILSuccess, fetchQUESTDETAILError } from './actions';

export const fetchQUESTDETAIL = (id) => {
    const urls = "http://localhost:8000";
    return dispatch => {
        dispatch(fetchQUESTDETAILRequest());
        axios.get(urls+'/api/questlist/'+id)
        .then(res => {
            dispatch(fetchQUESTDETAILSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUESTDETAILError(error));
        });
    };
}