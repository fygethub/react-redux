import React from "react";
import {connect} from "../../components/react-redux";
import {toggleTodo as toggleTodoCreate} from "../../redux/actions";

const Todo = ({todo, toggleTodo}) => (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span className={[
            "todo-item__text",
            todo && todo.completed && "todo-item__text--completed"
        ].join(" ")}>
      {todo.content}
    </span>
    </li>
);

export default connect(
    null,
    {toggleTodo: (dispatch) => value => dispatch(toggleTodoCreate(value))}
)(Todo);
