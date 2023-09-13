import React from 'react'

export const todoForm = () => {
  return (
    <form className='todoForm'>
        <input type="text" className='todo-input' placeholder="Add a task"/>
        <button type='submit' className='todo-btn'></button>
    </form>
  )
}
