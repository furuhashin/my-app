import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'Todo1つ目', id: 0 },
        { title: 'Todo2つ目', id: 1 },
      ],
      uniqueId: 1,
    };
    // Appコンポーネントというコンテキストを指定する（DOM内で呼ばれたときにコンテキストを見失う）
    this.resetTodo = this.resetTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(title) {
    const { tasks, uniqueId } = this.state;
    tasks.push({
      title,
      id: uniqueId,
    });
    // reactのメソッドstateをセットする
    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }
  resetTodo() {
    this.setState({
      tasks: [
        { title: 'Todo1つ目', id: 0 },
        { title: 'Todo2つ目', id: 1 },
      ],
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
