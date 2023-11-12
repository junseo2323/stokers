import axios from 'axios';
import { fetchQUESTRequest, fetchQUESTSuccess, fetchQUESTError } from './actions';

export const fetchQUEST = () => {
    return dispatch => {
        dispatch(fetchQUESTRequest());
        axios.get('http://ec2-52-79-194-71.ap-northeast-2.compute.amazonaws.com/api/questlist/')
        .then(res => {
            dispatch(fetchQUESTSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUESTError(error));
        });
    };
}