import * as A from "../actionTypes";
const initialState = [];

export const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case A.ADD_TODO:
      return [...state, payload];
    case A.DEL_TODO:
      return state.filter((item) => item.id !== payload);
    case A.EDIT_TODO:
      return state.map((item) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });
    case A.MAKE_DONE:
      return state.map((item) =>
        item.id === payload ? { ...item, isDone: !item.isDone } : item
      );
    case A.MAKE_IMPORTANT:
      return state.map((item) =>
        item.id === payload ? { ...item, isImportant: !item.isImportant } : item
      );
    case A.DEL_DONE_TODOS:
      return state.filter((item) => !item.isDone);
    default:
      return state;
  }
};
