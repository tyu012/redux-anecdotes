import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitAnecdote = (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value
    console.log('new anecdote', anecdote)
    event.target.anecdote.value = ''

    dispatch(addAnecdote(anecdote))
    
    dispatch(showNotification(`submitted '${anecdote}'`))
    setTimeout(() => dispatch(hideNotification()), 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={submitAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm