import axios from 'axios';
import { fetchQUESTRequest, fetchQUESTSuccess, fetchQUESTError } from './actions';

export const fetchQUEST = () => {
    const urls = "http://ec2-13-124-97-107.ap-northeast-2.compute.amazonaws.com:8080";
    return dispatch => {
        dispatch(fetchQUESTRequest());
        axios.get('/api/questlist/')
        .then(res => {
            dispatch(fetchQUESTSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUESTError(error));
        });
    };
}