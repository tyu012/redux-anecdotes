const reducer = (state = '', action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'SET_FILTER':
      return action.data
    default:
      return state
  }
}

export const filter = text => {
  return {
    type: 'SET_FILTER',
    data: text
  }
}

export default reducer