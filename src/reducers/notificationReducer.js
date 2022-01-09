const initialState = {
  text: 'Welcome to notes app!',
  showing: false
}

const reducer = (state = initialState, action) => {
  console.log('State now:', state)
  console.log('Action:', action)

  switch (action.type) {
    case 'SHOW_NOTIF':
      return {
        text: action.data,
        showing: true
      }
    case 'HIDE_NOTIF':
      return {
        text: '',
        showing: false
      }
    default:
      return state
  }
}

export const showNotification = (text, time /* in seconds */) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(hideNotification())
    }, time * 1000)
    dispatch({
      type: 'SHOW_NOTIF',
      data: text,
    })
  }
  // return {
  //   type: 'SHOW_NOTIF',
  //   data: text,
  // }
}
export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIF',
  }
}

export default reducer