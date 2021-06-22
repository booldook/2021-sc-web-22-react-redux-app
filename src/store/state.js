const state = {
	user: {
		isPending: false, // 요청을 보내고 대기중일땐 true => 이때 로딩바를 돌린다.
		isLogin: false,		// Login 상태면 true, 아니면 false
		info: null,				// Login일때 사용자 정보를 담는다.
		err: null					// error가 발생하면 에러정보가 담긴다.
	},
	comments: []
}

export default state