import axios from 'axios';
import { fetchQUESTDETAILRequest, fetchQUESTDETAILSuccess, fetchQUESTDETAILError } from './actions';

export const fetchQUESTDETAIL = (id) => {
    const urls = "http://ec2-13-124-97-107.ap-northeast-2.compute.amazonaws.com:8080";
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