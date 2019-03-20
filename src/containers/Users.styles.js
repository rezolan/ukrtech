export const styles = theme => ({
	containerClassName: {
		justifyContent: 'center',
		display: 'flex'
	},
	pageClassName: {
		listStyleType: 'none',
		padding: theme.spacing.unit
	},
	pageLinkClassName: {
		cursor: 'pointer',
		outline: 'none'
	},
	activeClassName: {
		backgroundColor: '#b3b3b3',
		borderRadius: theme.spacing.unit
	},
	previousClassName: {
		listStyleType: 'none',
		cursor: 'pointer',
		padding: theme.spacing.unit
	},
	nextClassName: {
		listStyleType: 'none',
		cursor: 'pointer',
		padding: theme.spacing.unit
	},
	breakClassName: {
		listStyleType: 'none',
		cursor: 'pointer',
		padding: theme.spacing.unit
	}
});