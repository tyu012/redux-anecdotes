const reducer = (state = 'No notification', action) => {
  console.log('State now:', state)
  console.log('Action:', action)

  switch (action) {
    default:
      return state
  }
}

export default reducer