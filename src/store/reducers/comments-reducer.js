import produce from 'immer'

const initialState = []

const commentsReducer = produce((draft, action) => {
	switch(action.type) {
		case 'COMMENTS_ADD':
			draft.push(action.payload)
			break
		case 'COMMENTS_REMOVE':
			const idx = draft.findIndex(v => v.id === action.payload)
			draft.splice(idx, 1)
			break
		default: 
			return draft
	}
}, initialState)

export default commentsReducer