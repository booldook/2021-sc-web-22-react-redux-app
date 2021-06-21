import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actUserLogin, actUserLogout } from './store/actions/user-action'
import { actCommentsAdd, actCommentsRemove } from './store/actions/comments-action'

import './assets/css/App.css'
import state from './store/state'

function App() {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const comments = useSelector(state => state.comments)

	const onLogin = useCallback((e) => {
		dispatch(actUserLogin({
			id: 1,
			name: '춘향이'
		}))
	}, [])

	const onLogout = useCallback((e) => {
		dispatch(actUserLogout())
	}, [])

	return (
		<div className="container">
			<div className="alert alert-primary my-3">
				<h2>react-redux를 배워보자</h2>
			</div>
			<div className="user-wrapper">
				<div className="user-info">
					{ user ? user.name + '님이 로그인 하였습니다.' : '로그인 하세요.' }
				</div>	
				<div>
					{
						user 
							? <button className="btn btn-danger" onClick={ onLogout }>로그아웃</button>
							: <button className="btn btn-primary" onClick={ onLogin }>로그인</button>
					}
				</div>
			</div>
		</div>
	)
}

export default App;
