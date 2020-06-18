import React, { useState } from "react";
import { initialState } from '../reducers/reducer';

const TodoForm = () => {

  const [ state, setState ] = useState(initialState);

const onSubmit = (e) => {
e.preventDefault();

}

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Add a ToDo</label>
          <input type="text" />
        </div>
      </form>
      <div>
        <p>{state.item}</p>
      </div>
    </div>
  );
};

export default TodoForm;
