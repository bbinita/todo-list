import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span
          className={`todo-text ${todo.completed ? "completed" : ""}`}
          style={{ marginLeft: "10px" }}
        >
          {todo.text}
        </span>
      </div>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>✖</button>
    </li>
  );
};

export default TodoItem;
