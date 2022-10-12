import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {};

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Todo List</h1>
        <form className="TodoForm" onSubmit={handleSubmit}>
          <div>
            <label className="label">Add todo</label>
          </div>
          <input
            type="text"
            className="empty"
            placeholder="Add New ToDo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <div>
            <button className="Submit">Submit</button>
          </div>
        </form>
        <ul className="alltodos">
          {todos.map((t) => (
            <li className="singletodo">
              <span className={todo.completed ? "completion": ""}
              className="todotext" key={t.id}>
                {t.todo}
              </span>
              <button className="tick" onClick={() => handleEdit(t.id)}>
                &#10003;
              </button>
              <button className="cross" onClick={() => handleDelete(t.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
