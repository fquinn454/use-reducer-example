import React from 'react'
import { ACTIONS } from '../App'
import { FaTrash } from 'react-icons/fa'
import { IoIosSwitch } from 'react-icons/io'

function Todo({todo, dispatch}){
    return(
        <div className='flexbox'>
            <span style={{color: todo.complete ? '#AAA' : '#000'}}>
                {todo.name}
            </span>
            <button className='left' onClick= {() => dispatch({type:ACTIONS.TOGGLE_TODO, payload: {id: todo.id }})}><IoIosSwitch /></button>
            <button onClick= {() => dispatch({type:ACTIONS.DELETE_TODO, payload: {id: todo.id }})}><FaTrash /></button>
        </div>
    )
}

export default Todo;