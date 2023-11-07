import { ADD_QUESTDETAIL, FETCH_QUESTDETAIL_SUCCESS,FETCH_QUESTDETAIL_REQUEST, FETCH_QUESTDETAIL_ERROR } from "../actions/actions";

let initialState = {
  QUESTDETAIL: [],
  error: null
}

export const questdetailReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_QUESTDETAIL_REQUEST:
      return {...state};
    case FETCH_QUESTDETAIL_SUCCESS:
      return {...state, QUESTDETAIL: action.payload.QUESTDETAIL}
    case FETCH_QUESTDETAIL_ERROR:
      return {...state, error: action.payload}
    case ADD_QUESTDETAIL:
      return {...state, QUESTDETAIL: [action.payload, ...state.QUESTDETAIL]}
    default:
      return state;
  }
};

export default questdetailReducer;
