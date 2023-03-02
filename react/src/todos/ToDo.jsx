import React from 'react'

export const ToDo = ({key,todo,handleDelete,handleToggleTodo}) => {
    console.log({todo})
  return (
      <>
        <div>{todo.text}</div>
        
        {(todo.done) ? <button onClick={ (e) => {handleToggleTodo(todo.id)}}>ToDO </button>:
         <button onClick={ (e) => {handleToggleTodo(todo.id)}}> Done</button>
        }
        <button onClick={ (e) => {handleDelete(todo.id)}}> DELETE</button>

      </>
    
  )
}
