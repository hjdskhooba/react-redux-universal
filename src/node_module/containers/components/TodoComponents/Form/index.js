import { dateNow as formatDate } from "../../../../selectors";
import {addTodo} from "../../../../actions";
import { connect } from "react-redux";
import { useState } from "react";

const Form = ({ addTodo, todosLength }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length && desc.length) {
      const date = formatDate(Date.now());
      const newTodo = {
        title: title,
        desc: desc,
        created_at: date,
        isDone: false,
        isImportant: false,
        isEdited: false,
        id: todosLength + 1,
      };

      addTodo(newTodo);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <form className="main__form todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        className="todo__form-input input-title"
        onInput={handleChange}
        placeholder="Todo Title"
      />
      <input
        type="text"
        value={desc}
        className="todo__form-input input-desc"
        onInput={handleChangeDesc}
        placeholder="Todo Desciption"
      />
      <input type="submit" className="todo__form-button" value="Add"/>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    todosLength: state.todos.length,
  };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
