import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './UsersList.styles';

const UsersList = ({ listData, classes: { paper } }) => (
	<Grid
		container
		spacing={16}>
		{listData.map(item => (
			<Grid
				item
				xs={12}
				md={4}
				key={item.id}>
				<Paper
					elevation={12}
					className={paper}>
					<h4>{item.name}</h4>
					<h6>{item.date}</h6>
					<h6>{item.country}</h6>
				</Paper>
			</Grid>
		))}
	</Grid>
);

export default withStyles(styles)(UsersList);