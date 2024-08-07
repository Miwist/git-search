import { combineReducers } from "redux";
import inputReducer from "./input";
import repositoriesReducer from "./repositories";

const rootReducer = combineReducers({
  input: inputReducer,
  repositories: repositoriesReducer,
});

export default rootReducer;
