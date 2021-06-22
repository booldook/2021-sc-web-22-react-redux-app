import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { actCommentsRemove } from '../store/actions/comments-action'

const List = ({ v }) => {

	const dispatch = useDispatch()
	const id = v.id

	const onRemove = useCallback( e => {
		e.preventDefault()
		dispatch(actCommentsRemove(id))
		// if(window.confirm('정말로 삭제하시겠습니까?')) {}
	}, [dispatch, id])

	return (
		<tr>
			<td>{ v.id }</td>
			<td>{ v.writer }</td>
			<td className="text-left">{ v.comment }</td>
			<td>
				<button onClick={ onRemove }>삭제</button>
			</td>
		</tr>
	);
}

export default List;
