const initialState = {
  text: 'Welcome to notes app!',
  showing: false
}

const reducer = (state = initialState, action) => {
  console.log('State now:', state)
  console.log('Action:', action)

  switch (action.type) {
    case 'SHOW_NOTIF':
      if (state.timeoutId) {
        clearTimeout(state.timeoutId)
      }
      return {
        text: action.data.text,
        showing: true,
        timeoutId: action.data.timeoutId,
      }
    case 'HIDE_NOTIF':
      return {
        text: '',
        showing: false,
        timeoutId: undefined,
      }
    default:
      return state
  }
}

export const showNotification = (text, time /* in seconds */) => {
  return dispatch => {
    const timeoutId = setTimeout(() => {
      dispatch(hideNotification())
    }, time * 1000)
    dispatch({
      type: 'SHOW_NOTIF',
      data: {
        text,
        timeoutId,
      },
    })
  }
}
export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIF',
  }
}

export default reducer