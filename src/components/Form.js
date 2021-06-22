import { useCallback, useRef, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actCommentsAdd } from '../store/actions/comments-action'
import moment from 'moment'

const Form = () => {
	const dispatch = useDispatch()
	const { isLogin, info } = useSelector(state => state.user)
	
	const inputRef = useRef(null)

	const onSubmit = useCallback((e) => {
		e.preventDefault()
		if(inputRef.current.value.trim() !== '') {
			dispatch(actCommentsAdd({
				uid: isLogin ? info.id : 0,
				writer: isLogin ? info.name : '',
				wdate: moment().format('YYYY-MM-DD HH:mm:ss'),
				comment: inputRef.current.value
			}))
			inputRef.current.value = ''
			inputRef.current.focus()
		}
	}, [dispatch, isLogin, info])

	const value = useMemo(() => {
		if(!isLogin) return ''
	}, [isLogin])

	return (
		<form onSubmit={ onSubmit }>
			<div className="form-inline my-3">
				<input ref={ inputRef } className="form-control w-75" placeholder="코멘트를 남겨주세요." autoFocus disabled={ !isLogin } value={ value } />
				<button className="btn btn-primary ml-1" disabled={ !isLogin }>등록</button>
			</div>
		</form>
	)
}

export default Form