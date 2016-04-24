/// <reference path="typings/bundle.d.ts" />
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { counter } from './reducers'
import Counter from './components/Counter'

const store = createStore(counter)

function render() {
  ReactDOM.render(
    <Counter 
        value={store.getState()} 
        onIncrement={() => store.dispatch({ type: 'INCREMENT' }) }
        onDecrement={() => store.dispatch({ type: 'DECREMENT' }) }
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
