import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    const { anecdotes, filter } = state
    if (filter === '') {
      return anecdotes
    } else {
      return anecdotes.filter(a =>
        a.content.toLowerCase().includes(filter.toLowerCase()))
    }
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))

    const { content } = anecdotes.find(a => a.id === id)
    dispatch(showNotification(`you voted '${content}'`))
    setTimeout(() => dispatch(hideNotification()), 5000)
  }

  return (
    <div>
      {anecdotes
        .sort((a1, a2) => a2.votes - a1.votes)
        .map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => vote(anecdote.id)}
          />
        )
      }
    </div>
  )
}

export default AnecdoteList