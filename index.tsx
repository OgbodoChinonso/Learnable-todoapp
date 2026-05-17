
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  dueDate?: Date;
}

class TodoList {
  private todos: TodoItem[] = [];
  private nextId: number = 1;
  
  addTodo(task: string, dueDate?: Date): void {
    const newTodo: TodoItem = {
      id: this.nextId,
      task: task,
      completed: false,
      dueDate: dueDate
    };
    
    this.todos.push(newTodo);
    this.nextId++;
    console.log(`Added: "${task}"`);
  }

  completeTodo(id: number): void {
    const todo = this.todos.find(item => item.id === id);
    if (todo) {
      todo.completed = true;
      console.log(`Completed todo ID: ${id}`);
    } else {
      console.log(`Todo with ID ${id} not found.`);
    }
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);
    console.log(`Removed todo ID: ${id}`);
  }

  listTodos(): TodoItem[] {
    return this.todos;
  }

  filterTodos(completedStatus: boolean): TodoItem[] {
    return this.todos.filter(item => item.completed === completedStatus);
  }
  
  updateTaskDescription(id: number, newLength: string): void {
    const todo = this.todos.find(item => item.id === id);
    if (todo) {
      todo.task = newLength;
      console.log(`Updated todo ID ${id} description to: "${newLength}"`);
    } else {
      console.log(`Todo with ID ${id} not found.`);
    }
  }


  clearCompleted(): void {
    this.todos = this.todos.filter(item => item.completed === false);
    console.log("Cleared all completed todos.");
  }
}


const myTodoList = new TodoList();

console.log("Adding Todos");
myTodoList.addTodo("Buy groceries", new Date("2026-05-20"));
myTodoList.addTodo("Clean the room");
myTodoList.addTodo("Finish TypeScript project", new Date("2026-05-18"));

console.log("\n Current Todo List");
console.log(myTodoList.listTodos());

console.log("\nCompleting a Todo");
myTodoList.completeTodo(1);

console.log("\n Filtering Pending Todos");
console.log(myTodoList.filterTodos(false));

console.log("\n Updating a Task Description");
myTodoList.updateTaskDescription(2, "Clean the kitchen instead");

console.log("\n Removing a Todo");
myTodoList.removeTodo(3);

console.log("\n Clearing Completed Todos");
myTodoList.clearCompleted();

console.log("\n Final Todo List");
console.log(myTodoList.listTodos());
