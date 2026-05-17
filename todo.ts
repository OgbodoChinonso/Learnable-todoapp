interface TodoItem {
readonly  id: number;
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
      console.log(`Completed task ID ${id}: "${todo.task}"`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }


  removeTodo(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);
    console.log(`Removed task ID ${id}`);
  }

  
  listTodos(): TodoItem[] {
    return this.todos;
  }

 
  filterTodos(isCompleted: boolean): TodoItem[] {
    return this.todos.filter(item => item.completed === isCompleted);
  }


  updateTaskDescription(id: number, newTaskDescription: string): void {
    const todo = this.todos.find(item => item.id === id);
    if (todo) {
      todo.task = newTaskDescription;
      console.log(`Updated task ID ${id} to: "${newTaskDescription}"`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }


  clearCompleted(): void {
    this.todos = this.todos.filter(item => item.completed === false);
    console.log("Cleared all completed tasks.");
  }
}


const myTodoList = new TodoList();

console.log("Adding Tasks ");
myTodoList.addTodo("Buy groceries", new Date("2026-05-20"));
myTodoList.addTodo("Clean the kitchen");
myTodoList.addTodo("Finish TypeScript assignment", new Date("2026-05-18"));

console.log("\n Current Todo List ");
console.log(myTodoList.listTodos());

console.log("\n Completing a Task ");
myTodoList.completeTodo(1); // Completes "Buy groceries"

console.log("\n Filtering Tasks (Only Incomplete) ");
console.log(myTodoList.filterTodos(false));

console.log("\n Updating a Task Description ");
myTodoList.updateTaskDescription(2, "Deep clean the kitchen and fridge");

console.log("\n Removing a Task ");
myTodoList.removeTodo(3); // Removes the assignment

console.log("\n Clearing All Completed Tasks ");
myTodoList.clearCompleted();

console.log("\n Final Todo List ");
console.log(myTodoList.listTodos());
