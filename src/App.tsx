import React, { useState } from "react";

import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <CreateTodo onCreate={todoAddHandler} />
      <TodoList
        items={todos}
        onDeleteTodo={todoDeleteHandler}
      />
    </div>
  );
};

export default App;
