import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import state from './state'
import reducers from './reducers'

const enhancer = composeWithDevTools()
const store = createStore(reducers, state, enhancer)

export default store


