import React, { Component } from 'react'
import Loading from './Spinner-2.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3' style={{}}>
        <img  src={Loading} alt="Loading..." />
      </div>
    )
  }
}
