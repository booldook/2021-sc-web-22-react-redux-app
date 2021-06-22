const initialState = {
	isLogin: false,
	info: null
}

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'USER_LOGIN':
			return {
				...state,
				isLogin: true,
				info: action.payload
			}
		case 'USER_LOGOUT':
			return {
				...state,
				isLogin: false,
				info: null
			}
		default: 
			return state
	}
}

export default userReducer