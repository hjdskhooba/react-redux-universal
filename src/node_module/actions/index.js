import {
  DEL_TODO,
  ADD_TODO,
  DEL_DONE_TODOS,
  EDIT_TODO,
  MAKE_DONE,
  MAKE_IMPORTANT,
} from "../actionTypes";

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};

export const handleItem = (text, id) => (dispatch) => {
  switch (text) {
    case "X":
      dispatch({
        type: DEL_TODO,
        payload: id,
      });
      break;
    case "I":
      dispatch({
        type: MAKE_IMPORTANT,
        payload: id,
      });
      break;
    case "D":
      dispatch({
        type: MAKE_DONE,
        payload: id,
      });
      break;
    default:
      return "";
  }
};

export const editTodo = (newTodo) => (dispatch) => {
  dispatch({
    type: EDIT_TODO,
    payload: newTodo,
  });
};

export const deleteAllDoneTodos = () => (dispatch, state) => {
  if (state().todos.length) {
    if (window.confirm("You sure ?")) {
      dispatch({
        type: DEL_DONE_TODOS,
      });
    }
  }
};