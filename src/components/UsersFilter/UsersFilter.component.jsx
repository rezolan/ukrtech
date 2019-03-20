import React from 'react';
import Select from 'react-select';

const UsersFilter = ({ listData, filteringFieldsNames, changeFilterOption }) => {
	const fields = Object.keys(filteringFieldsNames);
	const uniqList = listData.reduce((acc, user, index) => {
		for(const field of fields) {
			const newItem = {value: user[field], label: user[field]};
			if(!index) {
				acc[field] = {[user[field]]: newItem};
			} else {
				acc[field] = {...acc[field], [user[field]]: newItem}
			}
		}
		return acc;
	}, {...filteringFieldsNames});
	console.log(uniqList);

	return (
		<div>
			{fields.map((field, index) => {
				const uniqValues = Object.values(uniqList[field]);
				return (
					<div key={index}>
						<h2>Select {field}</h2>
						<Select
							onChange={event => changeFilterOption({[field]: event})}
							options={uniqValues}
							defaultValue={uniqValues[0]}
							isClearable={true}
							isSearchable={true}/>
					</div>
				);
			})}
		</div>
	)
};

export default UsersFilter;