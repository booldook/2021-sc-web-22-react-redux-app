const initialState = []

const commentsReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'COMMENTS_ADD':
			return [...state, action.payload]
		case 'COMMENTS_REMOVE':
			return state.filter( v => v.id !== action.payload )
		default: 
			return state
	}
}

export default commentsReducer