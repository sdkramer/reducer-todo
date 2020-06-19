import React, { useState, useReducer } from "react";
import { todos,reducer } from "../reducers/reducer";
import './TodoForm.css';

const TodoForm = () => {
  // const [state, setState] = useState(todos);

  const [ state, dispatch ] = useReducer(reducer, todos)

  const [newTodo, setNewTodo] = useState("");

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target);

  //   setState([...state, { item: newTodo, completed: false, id: Date.now() }]);
  // };

  const toggleItem = (e) => {
console.log('toggle item',e);
const todoDiv = e.target.classList
// todoDiv.add('completed')
dispatch({type: 'TOGGLE_COMPLETE', payload: todoDiv})

  }



  return (
    <div>
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => {e.preventDefault(); dispatch({type: 'ADD_ITEM', payload: newTodo})}}>
          <div className="field">
            <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
            <button type='submit'>Add Todo</button>
          </div>
        </form>
      </div>
      <div className="ui divided items">
        {state.map((todo) => {
          console.log('the todo',todo);
          
          return (
            <div className="item">
              <div className="ui tiny image">
                <i className="calendar outline icon"></i>
              </div>
              <div className={todo.completed ? 'completed': ''} onClick={toggleItem}>{todo.item} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoForm;
