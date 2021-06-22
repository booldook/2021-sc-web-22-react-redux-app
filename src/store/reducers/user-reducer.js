import produce from 'immer'

const initialState = {
	isPending: false,
	isLogin: false,
	info: null,
	err: null,
}

const userReducer = produce((draft, action) => {
	switch(action.type) {
		case 'USER_LOGIN_PENDING':
			draft.isPending = true
			break
		case 'USER_LOGIN_FULFILLED':
			draft.isPending = false
			draft.isLogin = true
			draft.info = action.payload
			break
		case 'USER_LOGIN_REJECTED':
			draft.isPending = false
			draft.isLogin = false
			draft.info = null
			draft.err = action.payload
			break
		case 'USER_LOGOUT':
			draft.isPending = false
			draft.isLogin = false
			draft.info = null
			draft.err = null
			break
		default: 
			return draft
	}
}, initialState)

export default userReducer