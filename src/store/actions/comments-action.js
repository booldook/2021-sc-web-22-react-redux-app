import store from '../index'

const actCommentsAdd = (payload) => {
	const comments = store.getState().comments
	payload.id = comments.length ? comments[comments.length - 1].id + 1 : 1
	return { type: 'COMMENTS_ADD', payload }
}

const actCommentsRemove = (payload) => {
	return { type: 'COMMENTS_REMOVE', payload }
}

export { actCommentsAdd, actCommentsRemove }