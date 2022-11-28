import { useState } from "react";
import NewTodoNoCtx from "./components/NewTodo no context";
import TodosNoCtx from "./components/Todos no context";
import Todo from "./models/todo";

const todoList = [new Todo("Learn React"), new Todo("Learn Typescript")];

function AppNoCtx() {
  const [todos, setTodos] = useState<Todo[]>(todoList);
  console.log("rebuild");

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodoNoCtx onAddTodo={addTodoHandler} />
      <TodosNoCtx onRemoveTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default AppNoCtx;
