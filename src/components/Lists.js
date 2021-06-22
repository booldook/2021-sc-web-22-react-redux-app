import React from 'react';
import { useSelector } from 'react-redux'

import List from './List'

const Lists = () => {
	const comments = useSelector(state => state.comments)

	return (
		<table className="table my-3 text-center">
			<thead className="thead-dark">
				<tr>
					<th>번호</th>
					<th>작성자</th>
					<th>내용</th>
					<th>관리</th>
				</tr>
			</thead>
			<tbody>
				{ comments.map( v => <List v={ v } key={ v.id } /> ) }
			</tbody>
		</table>
	);
}

export default Lists;
