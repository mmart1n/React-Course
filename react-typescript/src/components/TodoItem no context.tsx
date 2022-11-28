import classes from "./TodoItem.module.css";

type PropsType = {
  text: string;
  onRemoveTodo: () => void;
};

const TodoItemNoCtx = (props: PropsType) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItemNoCtx;
