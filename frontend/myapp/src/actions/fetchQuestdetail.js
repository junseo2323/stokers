import axios from 'axios';
import { fetchQUESTDETAILRequest, fetchQUESTDETAILSuccess, fetchQUESTDETAILError } from './actions';

export const fetchQUESTDETAIL = (id) => {
    return dispatch => {
        dispatch(fetchQUESTDETAILRequest());
        axios.get('http://ec2-52-79-194-71.ap-northeast-2.compute.amazonaws.com/api/questlist/'+id)
        .then(res => {
            dispatch(fetchQUESTDETAILSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchQUESTDETAILError(error));
        });
    };
}