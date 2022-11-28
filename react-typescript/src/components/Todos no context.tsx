import Todo from "../models/todo";
import TodoItemNoCtx from "./TodoItem no context";

import classes from "./Todos.module.css";

type PropsType = {
  children?: React.ReactNode;
  items: Todo[];
  onRemoveTodo: (todoId: number) => void;
};

const TodosNoCtx = (props: PropsType) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItemNoCtx
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default TodosNoCtx;
