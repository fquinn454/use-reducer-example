import React, { useState, useReducer } from 'react';
import Todo from './components/Todo'
import './App.css';
import notebook from './images/notebook.png'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]

    case(ACTIONS.TOGGLE_TODO):
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete}
        }
        return todo
      })
    
      case(ACTIONS.DELETE_TODO):
        return todos.filter(todo => todo.id !== action.payload.id );

      default:
        return todos

  }
}

function newTodo(name){
  return {id: Date.now(), name: name, complete:false}
}


function App() {
  const[todos, dispatch] = useReducer(reducer, []);
  const[name, setName] = useState('')
  
  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: { name:name } });
    setName('');
  }

  console.log(todos);

  return (
    <div>
      <div className='app'>
        <img src={notebook} alt='Spiral bound notebook on wooden table' />
        <form onSubmit={handleSubmit}>
          <label for='name'>Add an item to your ToDo List</label>
          <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} />
          <button type="submit" >Add ToDo</button>
        </form>
      </div>
      <div className='todo-list'>
        <h2>To Do ...</h2>
        {todos.map(todo => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          })}
      </div> 

    </div>
  )
}

export default App;
