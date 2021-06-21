const initialState = []

const commentsReducer = (prevState = initialState, action) => {
	switch(action.type) {
		case 'COMMENTS_ADD':
			return [...prevState.comments, action.payload]
		case 'COMMENTS_REMOVE':
			return prevState.filter( v => v.id !== action.payload )
		default: 
			return prevState
	}
}

export default commentsReducer