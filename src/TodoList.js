import React, {Component} from 'react';
import TodoIttem from './TodoItem';

class TodoList extends Component {
  render() {
  //  tesks内の各TodoをTodoItemコンポーネントを用いてエレメントにしています
  //  list変数にはTodoItemエレメントの配列が入っています
    const list = this.props.tasks.map(todo => {
      return <TodoIttem {...todo} key={todo.id} />;
    });
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default TodoList;