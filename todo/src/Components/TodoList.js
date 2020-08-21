import React, {useReducer} from 'react';
import { initialState,reducer } from "../reducers/reducer";



const TodoList = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <div>
      <button className='ui button' style={{marginTop: '30px'}} onClick={(e) => {e.preventDefault(); dispatch({type: 'CLEAR_COMPLETED'})}}>Clear completed tasks</button>
    </div>
  )
}

export default TodoList;