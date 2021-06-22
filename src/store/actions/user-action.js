/*
1. 요청을 보내고 대기상태 pending
2. 결과가 성공으로 받음 	fulfilled
3. 에러를 받음						rejected
*/

const actUserLoginPending = () => {
	return {
		type: 'USER_LOGIN_PENDING'
	}
}

const actUserLoginFulfilled = (payload) => {
	return {
		type: 'USER_LOGIN_FULFILLED', 
		payload
	}
}

const actUserLoginRejected = (err) => {
	return {
		type: 'USER_LOGIN_ERROR', 
		err
	}
}


const actUserLogin = (payload) => {
	return (dispatch, getState) => {
		try {
			dispatch(actUserLoginPending())
			setTimeout(async function() {
				dispatch(await actUserLoginFulfilled(payload))
			}, 2000)
		}
		catch(err) {
			dispatch(actUserLoginRejected(err))
		}
	}
	// return { type: 'USER_LOGIN', payload }
}

const actUserLogout = () => {
	return { type: 'USER_LOGOUT' }
}

export { actUserLogin, actUserLogout }