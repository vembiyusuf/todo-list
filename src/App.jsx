import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  // Membuat ID unik untuk pengguna jika belum ada
  const userId = localStorage.getItem("userId") || `user-${Date.now()}`;
  localStorage.setItem("userId", userId);

  // Ambil todos dari localStorage berdasarkan userId
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(userId);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Setiap kali todos berubah, simpan ke localStorage berdasarkan userId
  useEffect(() => {
    localStorage.setItem(userId, JSON.stringify(todos));
  }, [todos, userId]);

  // Fungsi untuk menambah todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Fungsi untuk toggle status selesai
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Fungsi untuk menghapus todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">My Todo List</h1>
        <TodoList
          todos={todos}
          addTodo={addTodo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
