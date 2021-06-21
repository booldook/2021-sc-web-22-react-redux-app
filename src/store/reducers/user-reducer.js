const initialState = null

const userReducer = (prevState = initialState, action) => {
	switch(action.type) {
		case 'USER_LOGIN':
			return action.payload
		case 'USER_LOGOUT':
			return null
		default: 
			return prevState
	}
}

export default userReducer