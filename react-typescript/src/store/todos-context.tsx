import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextType = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: number) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (todoId: number) => {},
});

const TodosContextProvider = (props: { children?: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
