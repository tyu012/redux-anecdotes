import React from 'react'
import { connect } from 'react-redux'
import { filter } from '../reducers/filterReducer'

const Filter = props => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    props.filter(event.target.value)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filter,
}

export default connect(
  null,
  mapDispatchToProps,
)(Filter)