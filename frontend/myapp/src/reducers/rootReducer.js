import { combineReducers } from "redux";
import quiz from "./quizReducer";
import quest from "./questReducer";
import questdetail from "./questdetailReducer";

const rootReducer = combineReducers({
  quest,
  quiz,
  questdetail,
});

export default rootReducer;