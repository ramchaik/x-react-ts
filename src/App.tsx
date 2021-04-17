import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [
    {
      id: 1,
      text: "this is first task",
    },
    {
      id: 2,
      text: "this is second task",
    },
  ];

  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
