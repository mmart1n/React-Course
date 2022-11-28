import { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import classes from "./TodoItem.module.css";

type PropsType = {
  todo: Todo;
};

const TodoItem = ({ todo }: PropsType) => {
  const { removeTodo } = useContext(TodosContext);
  return (
    <li onClick={removeTodo.bind(null, todo.id)} className={classes.item}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
