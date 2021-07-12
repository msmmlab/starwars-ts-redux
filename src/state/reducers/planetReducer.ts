import { Action } from "../actions";
import { ActionType } from "../action-types";

interface PlanetState {
  data: string[];
  loading: boolean;
  error: null | string;
}

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const planetReducer = (
  state: PlanetState = initialState,
  action: Action
): PlanetState => {
  switch (action.type) {
    case ActionType.FETCH_PLANETS:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_PLANETS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.FETCH_PLANETS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export default planetReducer;
