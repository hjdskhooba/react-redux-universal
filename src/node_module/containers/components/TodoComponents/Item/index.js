import { handleItem, editTodo } from "../../../../actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Item = ({ handleItem, editTodo, item }) => {
  const [newTodo, setNewTodo] = useState({ ...item });
  const [startEdit, setStartEdit] = useState(false);

  const handleClick = (text) => {
    handleItem(text, item.id);
  };

  const submitEdit = (e) => {
    e.preventDefault();
    let newTitle = e.target[0].value;
    let newDesc = e.target[1].value;
    if (
      newTitle.length &&
      newDesc.length &&
      newTitle + newDesc !== item.title + item.desc
    ) {
      setNewTodo({
        ...item,
        title: newTitle,
        desc: newDesc,
        isEdited: true,
      });
      editTodo(newTodo);
      setStartEdit(false);
    }
  };
  useEffect(() => {
    editTodo(newTodo);
    console.log("!")
  }, [newTodo]);
  return (
    <div
      className={`todo__item ${item.isDone ? " done" : ""} ${
        item.isImportant ? " important" : ""
      } ${item.isEdited ? " edited" : ""}`}
    >
      <br />
      {!startEdit ? (
        <>
          <h3 className="todo__item-text">{item.title}</h3>
          <br />
          <p className="todo__item-text">{item.desc}</p>
        </>
      ) : (
        <form onSubmit={submitEdit}>
          <input
            type="text"
            className="todo__item-title edit"
            defaultValue={item.title}
          />
          <br />
          <textarea
            className="todo__item-desc edit"
            defaultValue={item.desc}
          />{" "}
          <button type="submit" className="submit-edit">
            ✓
          </button>
        </form>
      )}
      <br />
      <div
        className="todo__item-btns"
        onClick={(e) =>
          e.target.textContent.length && handleClick(e.target.textContent)
        }
      >
        <button className="todo__item-btn">X</button>{" "}
        <button
          className="todo__item-btn"
          onClick={() => !startEdit && setStartEdit(true)}
        >
          E
        </button>{" "}
        <button className="todo__item-btn imp">I</button>{" "}
        <button className="todo__item-btn dne">D</button>
      </div>
      <span>{item.created_at}</span>
    </div>
  );
};

const mapDispatchToProps = {
  handleItem,
  editTodo,
};

export default connect(null, mapDispatchToProps)(Item);
