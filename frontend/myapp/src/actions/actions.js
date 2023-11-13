export const ADD_QUEST = 'ADD_QUEST';
export const FETCH_QUEST_REQUEST = 'FETCH_QUEST_REQUEST';
export const FETCH_QUEST_ERROR = 'FETCH_QUEST_ERROR';
export const FETCH_QUEST_SUCCESS = 'FETCH_QUEST_SUCCESS';
export const ADD_QUIZ = 'ADD_QUIZ';
export const FETCH_QUIZ_REQUEST = 'FETCH_QUIZ_REQUEST';
export const FETCH_QUIZ_ERROR = 'FETCH_QUIZ_ERROR';
export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';
export const ADD_QUESTDETAIL = 'ADD_QUEST';
export const FETCH_QUESTDETAIL_REQUEST = 'FETCH_QUESTDETAIL_REQUEST';
export const FETCH_QUESTDETAIL_ERROR = 'FETCH_QUESTDETAIL_ERROR';
export const FETCH_QUESTDETAIL_SUCCESS = 'FETCH_QUESTDETAIL_SUCCESS';


export const addQuiz = (QuestId, Selection1, SelectionDetail1,Selection2, SelectionDetail2,Selection3, SelectionDetail3,Selection4, SelectionDetail4,QuizAnswer) => {
  // unknown user avatar img
    return {
        type: ADD_QUIZ,
        payload: {
          QuestId, 
          Selection1, 
          SelectionDetail1,
          Selection2, 
          SelectionDetail2,
          Selection3, 
          SelectionDetail3,
          Selection4, 
          SelectionDetail4,
          QuizAnswer
        }
    }
}

export const fetchQUIZRequest = (id) => {
  return {
    type: FETCH_QUIZ_REQUEST
  }
}

export const fetchQUIZError = (error) => {
  return {
    type: FETCH_QUIZ_ERROR,
    payload: error
  }
}

export const fetchQUIZSuccess = QUIZ => ({
  type: FETCH_QUIZ_SUCCESS,
  payload: {QUIZ}
})

/*****************************************************/
export const addQuest = (QuestId, Name, Subname,Level,Type,Detail) => {
  // unknown user avatar img
    return {
        type: ADD_QUEST,
        payload: {
            QuestId, 
            Name, 
            Subname,
            Level,
            Type, 
            Detail,
        }
    }
}

export const fetchQUESTRequest = () => {
  return {
    type: FETCH_QUEST_REQUEST
  }
}

export const fetchQUESTError = (error) => {
  return {
    type: FETCH_QUEST_ERROR,
    payload: error
  }
}

export const fetchQUESTSuccess = QUEST => ({
  type: FETCH_QUEST_SUCCESS,
  payload: {QUEST}
})
/*****************************************************/
export const addQuestdetail = (QuestId, Name, Subname,Level,Type,Detail) => {
  // unknown user avatar img
    return {
        type: ADD_QUESTDETAIL,
        payload: {
            QuestId, 
            Name, 
            Subname,
            Level,
            Type, 
            Detail,
        }
    }
}

export const fetchQUESTDETAILRequest = () => {
  return {
    type: FETCH_QUESTDETAIL_REQUEST
  }
}

export const fetchQUESTDETAILError = (error) => {
  return {
    type: FETCH_QUESTDETAIL_ERROR,
    payload: error
  }
}

export const fetchQUESTDETAILSuccess = QUESTDETAIL => ({
  type: FETCH_QUESTDETAIL_SUCCESS,
  payload: {QUESTDETAIL}
})

/*****************************************************/
