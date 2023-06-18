import Layout from "../../containers/Layout";
import Form from "../../containers/components/TodoComponents/Form";
import List from "../../containers/components/TodoComponents/List";
import { deleteAllDoneTodos } from "../../actions";
import { connect } from "react-redux";

const Todo = ({ todos, deleteAllDoneTodos }) => {
  return (
    <Layout>
      <div className="todo">
        <div className="container">
          <div className="todo__inner">
            <div className="dfjsb">
              <h1>Todo List</h1>
              <button onClick={deleteAllDoneTodos}>Delete done</button>
            </div>
            <Form />
            <List array={todos} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapDispatchToProps = {
  deleteAllDoneTodos,
};

const mapStateToProps = (state) => {
  const todos = state.todos;
  return {
    todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
