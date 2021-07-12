import { ActionType } from "../action-types";

interface FetchCharacters {
  type: ActionType.FETCH_CHARACTERS;
}

interface FetchCharacterError {
  type: ActionType.FETCH_CHARACTERS_ERROR;
  payload: string;
}

interface FetchCharacterSuccess {
  type: ActionType.FETCH_CHARACTERS_SUCCESS;
  payload: string[];
}

interface FetchPlanets {
  type: ActionType.FETCH_PLANETS;
}

interface FetchPlanetError {
  type: ActionType.FETCH_PLANETS_ERROR;
  payload: string;
}

interface FetchPlanetSuccess {
  type: ActionType.FETCH_PLANETS_SUCCESS;
  payload: string[];
}

export type Action =
  | FetchCharacters
  | FetchPlanets
  | FetchCharacterError
  | FetchCharacterSuccess
  | FetchPlanetError
  | FetchPlanetSuccess;
