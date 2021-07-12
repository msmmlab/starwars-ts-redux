import { StringifyOptions } from "querystring";
import { ActionType } from "../action-types";

interface FetchCharacters {
  type: ActionType.FETCH_CHARACTERS;
}

interface FetchPlanets {
  type: ActionType.FETCH_PLANETS;
}

interface FetchError {
  type: ActionType.FETCH_ERROR;
  payload: string;
}

interface FetchSuccess {
  type: ActionType.FETCH_SUCCESS;
  payload: string[];
}

export type Action = FetchCharacters | FetchPlanets | FetchError | FetchSuccess;
