import React, { Component } from "react";

class App extends Component {
  state = {
    newTodo: "",
    todos: [
      {
        title: "Learn React",
        done: false,
      },
      {
        title: "Learn JSX",
        done: false,
      },
    ],
  };

  newTodoChanged(e) {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.newTodo);
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false,
        },
      ],
    });
  }

  toggleTodoDone(e, index) {
    const todos = [...this.state.todos];
    todos[index] = { ...todos[index] };
    todos[index].done = e.target.checked;
    this.setState({ todos });
  }
  removeTodo(index){
    const todos = [...this.state.todos];
    todos.splice(index,1) 
    console.log(todos);
    this.setState({todos})
  }

  allDone(){
    const todos = this.state.todos.map(todo=>{
      return {
        title:todo.title,
        done:true
      }
    })
    this.setState({todos})
  }

  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input
            onChange={(event) => this.newTodoChanged(event)}
            type="text"
            id="newTodo"
            value={this.state.newTodo}
          />
          <button type="submit">Add todo</button>
        </form>
        <button onClick={()=>this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo.title}>
              <input
                onChange={(event) => this.toggleTodoDone(event, index)}
                type="checkbox"
                name=""
                id=""
                checked={todo.done}
              />
              <span style={{textDecoration:todo.done ? 'line-through':'inherit'}}>{todo.title}</span>
              <button onClick={()=>this.removeTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
