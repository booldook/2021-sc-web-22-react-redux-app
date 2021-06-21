const initialState = {
	isLogin: false,
	info: null
}

const userReducer = (prevState = initialState, action) => {
	switch(action.type) {
		case 'USER_LOGIN':
			return {
				...prevState,
				isLogin: true,
				info: action.payload
			}
		case 'USER_LOGOUT':
			return {
				...prevState,
				isLogin: false,
				info: null
			}
		default: 
			return prevState
	}
}

export default userReducer