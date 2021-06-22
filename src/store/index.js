/* 
1. redux에서 비동기 처리를 하기 위해서는 redux-thunk, redux-saga 등이 필요하다
2. 단 조금 있다 배울 @reduxjs/tookit에서는 thunk가 포함되어 있어 아래의 작업이 필요없다.
3. redux-thunk는 미들웨어다.
4. 비동기 action은 객체가 아닌 함수로 만들어 thunk에서 처리하도록 한다.
*/

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // 비동기 액션을 담당한다
import { composeWithDevTools } from 'redux-devtools-extension'
import state from './state'
import reducers from './reducers'

// dispatch 할때 변경 전의 state와 변경 후의 state 사이에서 작업하는 모듈
const middleware = (store) => (next) => (action) => {
	// dispatch 전
	// console.log(store.getState())
	next(action)
	// dispatch 후
	// console.log(store.getState())
}

const enhancer = composeWithDevTools({})
const store = createStore(reducers, state, enhancer(applyMiddleware(thunk, middleware)))

export default store

