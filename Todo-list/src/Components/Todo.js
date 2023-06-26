import { useState } from "react";
import "../style.css";
import { FaTrashAlt } from "react-icons/fa";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const generateId = () => Math.random() * 100;

  const handleSubmit = () => {
    setTodo(
      todo.concat({
        id: generateId(),
        text: input,
      })
    );
    setInput("");
  };

  const removeTodo = (id) => setTodo((todo) => todo.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todo-list">
        {todo.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
