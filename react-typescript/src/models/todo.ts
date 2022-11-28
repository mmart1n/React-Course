class Todo {
  id: number;
  text: string;

  static id = 0;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Todo.id;
    console.log(this.id);
    Todo.id++;
  }
}

export default Todo;
