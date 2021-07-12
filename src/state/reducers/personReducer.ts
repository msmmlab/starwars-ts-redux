import { ActionType } from "../action-types";
import { Action } from "../actions";

interface PersonState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const personReducer = (
  state: PersonState = initialState,
  action: Action
): PersonState => {
  switch (action.type) {
    case ActionType.FETCH_CHARACTERS:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.FETCH_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export default personReducer;
