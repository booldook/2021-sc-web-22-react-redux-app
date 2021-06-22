let num = 1

const actCommentsAdd = (payload) => {
	payload.id = num++
	return { type: 'COMMENTS_ADD', payload }
}

const actCommentsRemove = (payload) => {
	return { type: 'COMMENTS_REMOVE', payload }
}

export { actCommentsAdd, actCommentsRemove }