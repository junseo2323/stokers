import axios from 'axios';
import { fetchQUIZRequest, fetchQUIZSuccess, fetchQUIZError } from './actions';

export const fetchQUIZ = (id) => {
    const urls = "http://ec2-13-124-97-107.ap-northeast-2.compute.amazonaws.com:8080";
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