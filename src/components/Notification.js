import React from 'react'
import { connect } from 'react-redux'

const Notification = props => {
  const notification = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div
      style={notification.showing
        ? style
        : { display: 'none' }}
    >
      {notification.text}
    </div>
  )
}

const mapStateToProps = state => {
  return { notification: state.notification }
}

export default connect(
  mapStateToProps
)(Notification)