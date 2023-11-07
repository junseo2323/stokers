import { ADD_QUEST, FETCH_QUEST_SUCCESS,FETCH_QUEST_REQUEST, FETCH_QUEST_ERROR } from "../actions/actions";

let initialState = {
  QUEST: [],
  error: null
}

export const questReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_QUEST_REQUEST:
      return {...state};
    case FETCH_QUEST_SUCCESS:
      return {...state, QUEST: action.payload.QUEST}
    case FETCH_QUEST_ERROR:
      return {...state, error: action.payload}
    case ADD_QUEST:
      return {...state, QUEST: [action.payload, ...state.QUEST]}
    default:
      return state;
  }
};

export default questReducer;
