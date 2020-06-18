import React, { useState, useReducer } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { initialState, reducer } from '../reducers/reducer';



const App = () => {

 
  


  return (
    <div className='ui container' style={{marginTop: '10px'}}>
    <h2>ToDos</h2>
    <TodoForm />
    <TodoList />
    </div>
    )
}

export default App;