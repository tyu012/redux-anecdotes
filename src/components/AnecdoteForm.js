import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = props => {

  const submitAnecdote = async (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value
    console.log('new anecdote', anecdote)
    event.target.anecdote.value = ''

    props.addAnecdote(anecdote)
    
    props.showNotification(`submitted '${anecdote}'`, 5)
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

export default connect(
  null,
  { addAnecdote, showNotification }
)(AnecdoteForm)