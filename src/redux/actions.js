import axios from "axios";
import {
  GET_TEMPERAMENTS,
  GET_DOGS,
  GET_DOG_NAME,
  FILTER_TEMPERAMENTS,
  FILTER_ORIGIN,
  ORDER_ACDC,
  ORDER_WEIGHT,
  GET_DOG_DETAIL,
  LOADING,
} from "./actionsType";

import {
  endpointTemperaments,
  endpointGetDogs,
  endpointDogName,
  endpointDogId,
} from "../helpers/endpoints";

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(endpointTemperaments);

      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const getDogs = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(endpointGetDogs);
      return dispatch({
        type: GET_DOGS,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const getDogName = (name) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(endpointDogName + name);
      dispatch({
        type: GET_DOG_NAME,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const filterByTemperament = (value) => {
  return {
    type: FILTER_TEMPERAMENTS,
    payload: value,
  };
};

export const filterByOrigin = (value) => {
  return {
    type: FILTER_ORIGIN,
    payload: value,
  };
};

export const orderACDC = (value) => {
  return {
    type: ORDER_ACDC,
    payload: value,
  };
};

export const orderWeight = (value) => {
  return {
    type: ORDER_WEIGHT,
    payload: value,
  };
};

export const getDogDetail = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(endpointDogId + id);
      dispatch({
        type: GET_DOG_DETAIL,
        payload: data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const loading = (value) => {
  return {
    type: LOADING,
    payload: value,
  };
};
