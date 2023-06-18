import {
  GET_RESULT_ST,
  GET_RESULT_DN,
  GET_RESULT_FD,
  SET_FROM,
  SET_AMOUNT,
  SET_TO,
} from "../actionTypes";

import { getResult as getResultApi } from "../api/money";

export const getResult = (instructions) => async (dispatch) => {
  dispatch({
    type: GET_RESULT_ST,
  });
  try {
    getResultApi(instructions)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: GET_RESULT_DN,
          payload: res,
        });
      });
  } catch (e) {
    dispatch({
      type: GET_RESULT_FD,
      payload: e,
      error: true,
    });
  }
};

export const setFrom = (from) => (dispatch) => {
  dispatch({
    type: SET_FROM,
    payload: from,
  });
};

export const setTo = (to) => (dispatch) => {
  dispatch({
    type: SET_TO,
    payload: to,
  });
};

export const setAmount = (amount) => (dispatch) => {
  dispatch({
    type: SET_AMOUNT,
    payload: amount,
  });
};
