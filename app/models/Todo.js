export default class Todo {
  constructor(data) {

    this.description = data.description
    this.Id = data._id || ''
  }

  get Template(){
    return /*html*/ `
    <h4> ${this.description} <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this.Id}')">Delete</button> </h4>
    `
  }
}