import store from "../store.js";
import Todo from "../models/Todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Derrick/todos/",
  timeout: 8000
});







class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get()
    .then(res => {
      console.log('my todo', res.data.data);
      let todo = res.data.data.map(todoRawData => new Todo(todoRawData))
      store.commit('todos', todo)
    })
    //TODO Handle this response from the server
    
  }

  addTodoAsync(todo) {

    todoApi.post("", todo)
      .then(res => {
        console.log(res.data);
        this.getTodos()
      })
      .catch(err => console.error(err))
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }










  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    todoApi.delete(todoId)
      .then(res => {
        console.log(res.data);
        this.getTodos()
      })
      .catch(err => console.error(err))
  }


  todoCount(){
    let todo = store.State.todos
    // ANCHOR nees to make a length for todos
  }
}

const todoService = new TodoService();
export default todoService;
