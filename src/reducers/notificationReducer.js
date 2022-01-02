const initialState = {
  text: 'Welcome to notes app!',
  showing: true,
}

const reducer = (state = initialState, action) => {
  console.log('State now:', state)
  console.log('Action:', action)

  switch (action) {
    default:
      return state
  }
}

export default reducer