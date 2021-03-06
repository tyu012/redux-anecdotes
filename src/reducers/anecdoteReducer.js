import anecdoteService from "../services/anecdotes"

// not used anymore
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// not used anymore
// const getId = () => (100000 * Math.random()).toFixed(0)
// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// not used anymore
// const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const targetId = action.data.id
      const targetAnecdote = state.find(a => a.id === targetId)
      const updatedAnecdote = { ...targetAnecdote, votes: targetAnecdote.votes + 1 }
      const newState = state.map(anecdote =>
        anecdote.id === targetId ? updatedAnecdote : anecdote)
      console.log('VOTE', newState)
      return newState
    case 'ADD_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      console.log('invalid action')
      return state
  }
}

export const addVote = id => {
  return async dispatch => {
    const data = await anecdoteService.vote(id)
    dispatch({
      type: 'VOTE',
      data: { id },
    })
  }
}

export const addAnecdote = anecdote => {
  return async dispatch => {
    const data = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'ADD_ANECDOTE',
      data,
    })
  }
  // return {
  //   type: 'ADD_ANECDOTE',
  //   data: anecdote,
  // }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data,
    })
  }
  // return {
  //   type: 'INIT_ANECDOTES',
  //   data: anecdotes
  // }
}

export default reducer