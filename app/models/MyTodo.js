export default class MyTodo {
  constructor(data) {

    this.title = data.title
  }

  get Template(){
    return /*html*/ `
    <h4>${this.title}</h4>
    `
  }
}