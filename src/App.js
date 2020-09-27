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
      newTodo:'',
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false,
        },
      ],
    });
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

        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.title}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
