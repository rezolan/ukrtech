import React from 'react';

const UsersList = ({ listData }) => (
	<div>
		{listData.map(item => (
			<div key={item.id}>
				<h4>{item.firstName} {item.secondName} {item.lastName}</h4>
				<h6>{item.birthYear}</h6>
				<h6>{item.country}</h6>
			</div>
		))}
	</div>
);

export default UsersList;