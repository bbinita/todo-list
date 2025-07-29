import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-btn" type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
