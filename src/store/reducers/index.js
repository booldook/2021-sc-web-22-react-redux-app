import { combineReducers } from 'redux'
import userReducer from './user-reducer'
import commentsReducer from './comments-reducer'

const reducers = combineReducers({
	user: userReducer,
	comments: commentsReducer
})

export default reducers