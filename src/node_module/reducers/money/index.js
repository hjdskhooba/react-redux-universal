import * as A from "../../actionTypes";

const initialState = {
  data: {},
  isFetching: true,
  currency_data: { from: "", to: "", amount: 1 },
  isGettingResult: true,
  result: 0,
  isDataInTransit: false,
};

const money = (state = initialState, { type, payload }) => {
  switch (type) {
    case A.GET_COUNTRY_DN:
      return { ...state, data: payload, isFetching: false };
    case A.GET_RESULT_ST:
        return {...state, isDataInTransit: true}
    case A.GET_RESULT_DN:
      return {
        ...state,
        currency_data: {
          ...state.currency_data,
          from: payload.query.from,
          to: payload.query.to,
          amount: payload.query.amount,
        },
        isGettingResult: false,
        result: payload.result,
      };
    case A.SET_FROM:
      return {
        ...state,
        currency_data: { ...state.currency_data, from: payload },
      };
    case A.SET_TO:
      return {
        ...state,
        currency_data: { ...state.currency_data, to: payload },
      };
    case A.SET_AMOUNT:
      return {
        ...state,
        currency_data: { ...state.currency_data, amount: payload },
      };
    default:
      return state;
  }
};

export default money;
