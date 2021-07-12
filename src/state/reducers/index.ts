import { combineReducers } from "redux";
import personReducer from "./personReducer";
import planetReducer from "./planetReducer";

const reducers = combineReducers({
  characters: personReducer,
  planets: planetReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
