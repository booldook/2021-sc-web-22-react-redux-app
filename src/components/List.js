import React, { useCallback } from 'react';

const List = ({ v }) => {

	const onRemove = useCallback( e => {
		e.preventDefault()
	}, [])

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
