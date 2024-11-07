import React from "react";
import PropTypes from "prop-types"; // Mengimpor PropTypes

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-2 my-2 rounded">
      <div
        onClick={() => toggleComplete(todo.id)}
        className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""
          }`}
      >
        {todo.text}
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

// Menambahkan validasi untuk props
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
