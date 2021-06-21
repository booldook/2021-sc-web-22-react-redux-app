const actUserLogin = (payload) => {
	return { type: 'USER_LOGIN', payload }
}

const actUserLogout = () => {
	return { type: 'USER_LOGOUT' }
}

export { actUserLogin, actUserLogout }