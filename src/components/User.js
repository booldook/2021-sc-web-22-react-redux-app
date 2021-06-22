import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actUserLogin, actUserLogout } from '../store/actions/user-action'

const User = () => {
	const dispatch = useDispatch()
	const { isLogin, info } = useSelector(state => state.user)

	const onLogin = useCallback((e) => {
		dispatch(actUserLogin({ id: 1, name: '춘향이'}))
	}, [dispatch])

	const onLogout = useCallback((e) => {
		dispatch(actUserLogout())
	}, [dispatch])

	return (
		<div className="user-wrapper">
			<div className="user-info py-3">
				{ isLogin ? info.name + '님이 로그인 하였습니다.' : '로그인 하세요.' }
			</div>	
			<div>
				{
					isLogin 
						? <button className="btn btn-danger" onClick={ onLogout }>로그아웃</button>
						: <button className="btn btn-primary" onClick={ onLogin }>로그인</button>
				}
			</div>
		</div>
	)
}

export default User