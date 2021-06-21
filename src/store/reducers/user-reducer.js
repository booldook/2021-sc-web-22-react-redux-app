const initialState = null

const userReducer = (prevState = initialState, action) => {
	switch(action.type) {
		case 'USER_LOGIN':
			return {
				...prevState, user: action.payload
			}
		case 'USER_LOGOUT':
			return {
				...prevState, user: null
			}
		default: 
			return prevState
	}
}

export default userReducer