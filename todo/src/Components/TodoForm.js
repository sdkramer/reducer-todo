import React, { useState } from "react";
import { todos } from "../reducers/reducer";

const TodoForm = () => {
  const [state, setState] = useState(todos);

  const [newTodo, setNewTodo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    setState([...state, { item: newTodo, completed: false, id: Date.now() }]);
  };



  return (
    <div>
      <div className="ui segment">
        <form className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label>Add a ToDo</label>
            <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="ui divided items">
        {state.map((todo) => {
          return (
            <div className="item">
              <div className="ui tiny image">
                <i className="calendar outline icon"></i>
              </div>
              <div className="middle aligned content">{todo.item} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoForm;
