/*
//reducer
const reducer = (state, action) => {
	switch(action.type) {
		case 'LOGIN':
			return {
				isAuth: true,
				info: {
					userid: 'booldook',
					username: '불뚝',
					grade: 3
				}
			}
	}
}


// action creator
const actLogin = (payload) => {
	return {
		type: 'LOGIN',
		payload
	}
}

// Component
dispatch(actLogin({
	userid: 'booldook',
	userpw: 'asdklfjaslkd'
}))
dispatch({
	type: 'LOGIN',
	payload: {
		userid: 'booldook',
		userpw: 'asdklfjaslkd'
	}
})

dispatch({
	type: 'LOGOUT',
	payload: {
		userid: 'booldook',
		userpw: 'asdklfjaslkd'
	}
})
*/