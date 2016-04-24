import * as React from 'react'
import { Component } from 'react'

export interface CounterProps {
  value: number,
  onIncrement: Function,
  onDecrement: Function,
}

export default class Counter extends Component<CounterProps, any> {
  render() :JSX.Element {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: { value } times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
      </p>
    )
  }
}

