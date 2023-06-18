
import {
  GET_LOCATION_ST,
  GET_LOCATION_DN,
  GET_LOCATION_FD,
  GET_WEATHER_DATA_ST,
  GET_WEATHER_DATA_DN,
  GET_WEATHER_DATA_FD,
  GET_COUNTRY_DN
} from "../actionTypes";

import { getLocationApi, apiRequest as apiRequestApi } from "../api/weather";

export const getLocation = (route = {pathname: ""}) => async (dispatch) => {
  dispatch({
    type: GET_LOCATION_ST,
  });
  getLocationApi()
    .then((data) => {
      let loc =
        data.city.name + " " + data.state.name + " " + data.country.name_native;
      dispatch({
        type: GET_LOCATION_DN,
        payload: loc,
      });
      if(route.pathname === "/money"){
        dispatch({
          type: GET_COUNTRY_DN,
          payload: data.country
        })
      }
    })
    .catch((e) => {
      dispatch({
        type: GET_LOCATION_FD,
        payload: e,
        error: true,
      });
    });
};

export const apiRequest = (location) => async (dispatch) => {
  dispatch({
    type: GET_WEATHER_DATA_ST,
  });
  apiRequestApi(location)
    .then((response) => {
      dispatch({
        type: GET_WEATHER_DATA_DN,
        payload: response.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: GET_WEATHER_DATA_FD,
        payload: e,
        error: true,
      });
    });
};
