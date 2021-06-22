const initialState = {
	isPending: false,
	isLogin: false,
	info: null,
	err: null,
}

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		/* case 'USER_LOGIN':
			return {
				...state,
				isLogin: true,
				info: action.payload
			} */
		case 'USER_LOGIN_PENDING':
			return {
				...state,
				isPending: true,
			}
		case 'USER_LOGIN_FULFILLED':
			return {
				...state,
				isPending: false,
				isLogin: true,
				info: action.payload,
			}
		case 'USER_LOGIN_REJECTED':
			return {
				...state,
				isPending: false,
				isLogin: false,
				info: null,
				err: action.payload
			}
		case 'USER_LOGOUT':
			return {
				...state,
				isPending: false,
				isLogin: false,
				info: null,
				err: null
			}
		default: 
			return state
	}
}

export default userReducer