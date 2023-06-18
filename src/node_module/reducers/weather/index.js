import * as A from "../../actionTypes";

const initialState = {
  location: "new york",
  data: {},
  isFetching: true,
};

const weather = (state = initialState, { type, payload }) => {
  switch (type) {
    case A.GET_LOCATION_ST:
      console.log("Start getting your current location");
      return state;
    case A.GET_LOCATION_DN:
      return { ...state, location: payload };
    case A.GET_LOCATION_FD:
      console.error("Failded to get your location", payload);
      return state;
    case A.GET_WEATHER_DATA_ST:
      console.log("Start getting weather data");
      return state;
    case A.GET_WEATHER_DATA_DN:
      return { ...state, data: payload, isFetching: false };
    case A.GET_WEATHER_DATA_FD:
      console.error("Failded to get weather data", payload);
      return state;
    default:
      return state;
  }
};

export default weather;
