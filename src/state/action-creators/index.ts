import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const fetchCharacters = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_CHARACTERS,
    });
    try {
      const { data } = await axios.get("https://swapi.dev/api/people/");
      const characters = data.results.map((result: any) => {
        return result.name;
      });
      dispatch({
        type: ActionType.FETCH_SUCCESS,
        payload: characters,
      });
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fetchPlanets = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_PLANETS,
    });

    try {
      const { data } = await axios.get("https://swapi.dev/api/planets/");
      const planets = data.results.map((planet: any) => {
        return planet.name;
      });
      dispatch({
        type: ActionType.FETCH_SUCCESS,
        payload: planets,
      });
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_ERROR,
        payload: error.message,
      });
    }
  };
};
