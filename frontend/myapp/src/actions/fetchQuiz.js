import axios from 'axios';
import { fetchQUIZRequest, fetchQUIZSuccess, fetchQUIZError } from './actions';

export const fetchQUIZ = (id) => {
    return dispatch => {
        dispatch(fetchQUIZRequest(id));
        axios.get('http://ec2-52-79-194-71.ap-northeast-2.compute.amazonaws.com:8080/api/quizlist/'+id)
        .then(res => {
            dispatch(fetchQUIZSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUIZError(error));
        });
    };
}