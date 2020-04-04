import TodoService from "../services/todo-service.js";
import store from "../store.js";
import todoService from "../services/todo-service.js";

//TODO Create the render function
function _drawTodos() {
  let template = ''
  let todo = store.State.todos

  todo.forEach(todos => template += todos.Template)
  document.getElementById('todos').innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe('todos', _drawTodos)
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    let formData = event.target;
    let todo = {
      //TODO build the todo object from the data that comes into this method
      description: formData.description.value
    };
    TodoService.addTodoAsync(todo);
    formData.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }


  todoCount(){
    todoService.todoCount()
  }
}
