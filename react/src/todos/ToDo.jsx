import React from 'react'

export const ToDo = ({key,todo,handleDelete,handleToggleTodo}) => {
    console.log({todo})
  return (
      <>
        <div>{todo.text}</div>
        
        {(todo.done) ? <button onClick={handleToggleTodo(todo.id)}>ToDO </button>:
         <button onClick={ (e) => {handleToggleTodo(todo.id)}}> Done</button>
        }

      </>
    
  )
}
