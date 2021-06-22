import { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actUserLogin, actUserLogout } from './store/actions/user-action'
import { actCommentsAdd, actCommentsRemove } from './store/actions/comments-action'

import './assets/css/App.css'

function App() {
	const dispatch = useDispatch()
	const { isLogin, info } = useSelector(state => state.user)
	const comments = useSelector(state => state.comments)
	
	const inputRef = useRef(null)

	const onLogin = useCallback((e) => {
		dispatch(actUserLogin({ id: 1, name: '춘향이'}))
	}, [dispatch])

	const onLogout = useCallback((e) => {
		dispatch(actUserLogout())
	}, [dispatch])

	const onSubmit = useCallback((e) => {
		e.preventDefault()
		dispatch(actCommentsAdd({
			uid: isLogin ? info.id : 0,
			comment: inputRef.current.value
		}))
	}, [dispatch, isLogin, info])

	return (
		<div className="container">
			<div className="alert alert-primary my-3">
				<h2>react-redux를 배워보자</h2>
			</div>
			<div className="user-wrapper">
				<div className="user-info">
					{ isLogin ? info.name + '님이 로그인 하였습니다.' : '로그인 하세요.' }
				</div>	
				<div>
					{
						isLogin 
							? <button className="btn btn-danger" onClick={ onLogout }>로그아웃</button>
							: <button className="btn btn-primary" onClick={ onLogin }>로그인</button>
					}
				</div>
				<form onSubmit={ onSubmit }>
					<div className="form-inline my-3">
						<input ref={ inputRef } className="form-control w-75" placeholder="코멘트를 남겨주세요." autoFocus />
						<button className="btn btn-primary ml-1">등록</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default App;
