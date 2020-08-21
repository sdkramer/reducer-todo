import React, { useState, useReducer } from "react";
import { initialState,reducer } from "../reducers/reducer";
import './TodoForm.css';

const TodoForm = () => {
  // const [state, setState] = useState(todos);

  const [ state, dispatch ] = useReducer(reducer, initialState)

  const [newTodo, setNewTodo] = useState("");

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target);

  //   setState([...state, { item: newTodo, completed: false, id: Date.now() }]);
  // };

  const toggleItem = (todoId) => {
console.log('toggle item',todoId);
// const todoDiv = e.target.classList
// todoDiv.add('completed')

// dispatch({type: 'TOGGLE_COMPLETE', payload: todoDiv})

  }

  // const clearCompleted = (e) => {

  // }



  return (
  <>
       <div className="ui segment">
        <form className="ui form" onSubmit={(e) => {e.preventDefault(); setNewTodo(''); dispatch({type: 'ADD_ITEM', payload: newTodo})}}>
          <div className="field">
            <input type="text" value={newTodo}onChange={(e) => {setNewTodo(e.target.value); console.log(e.target)}} />
            <button type='submit'>Add Todo</button>
          </div>
        </form>
      </div>

      <div className="ui divided items">

        {state.map((todo) => {
          console.log('the state',state);
          
          return (
            <div className="item">
              <div className="ui tiny image">
                <i className="calendar outline icon"></i>
              </div>
            <div className={todo.completed ? 'completed': ''} onClick={() => dispatch({type: "TOGGLE_COMPLETE", payload: todo})}>
              {todo.item}
            </div>
            </div>
          );
        })}

      </div>
  
  </>
 
  );
};

export default TodoForm;
