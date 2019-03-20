import React from 'react';
import Select from 'react-select';
import Grid from '@material-ui/core/Grid';

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

	return (
		<Grid
			container
			spacing={16}>
			{fields.map((field, index) => {
				const uniqValues = Object.values(uniqList[field]);
				return (
					<Grid
						item
						key={index}>
						<h2>Select {field}</h2>
						<Select
							onChange={event => changeFilterOption({[field]: event})}
							options={uniqValues}
							isClearable={true}
							isSearchable={true}/>
					</Grid>
				);
			})}
		</Grid>
	)
};

export default UsersFilter;