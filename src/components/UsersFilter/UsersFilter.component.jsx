import React from 'react';

const UsersFilter = ({ filteringFields, listData}) => {
	const fields = Object.keys(filteringFields);
	const mapList = listData.reduce((acc, user) => {
		for(const field of fields) {
			if(!acc[field]) {
				acc[field] = [user[field]];
				continue;
			}
			if(!acc[field].includes(user[field])) {
				acc[field].push(user[field])
			}
		}
		return acc;
	}, {});
	return (
		<div>
			{fields.map(field => field)}
		</div>
	)
};

export default UsersFilter;