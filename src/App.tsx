import React from "react";
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
      <TodoList items={todos} />
    </div>
  );
};

export default App;
