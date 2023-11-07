import { ADD_QUIZ, FETCH_QUIZ_SUCCESS,FETCH_QUIZ_REQUEST, FETCH_QUIZ_ERROR } from "../actions/actions";

let initialState = {
  QUIZ: [],
  error: null
}

export const quizReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_QUIZ_REQUEST:
      return {...state};
    case FETCH_QUIZ_SUCCESS:
      return {...state, QUIZ: action.payload.QUIZ}
    case FETCH_QUIZ_ERROR:
      return {...state, error: action.payload}
    case ADD_QUIZ:
      return {...state, QUIZ: [action.payload, ...state.QUIZ]}
    default:
      return state;
  }
};

export default quizReducer;
