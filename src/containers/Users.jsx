import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Users.styles';
import { UsersList } from '../components/UsersList';
import { UsersFilter } from '../components/UsersFilter';
import { fetchUsers, changeFilterOption, changeCurrentPage } from '../actions/index.js';


class Users extends PureComponent {
	state = {
		pageRangeDisplayed: 5
	}
	renderAll() {
		const { pageRangeDisplayed } = this.state;
		const {
			changeFilterOption,
			changeCurrentPage,
			classes,
			users: { usersList, filterList, filteringFieldsNames, currentPage, isLoading, error }
		} = this.props;
		const pageCount = filterList.length / pageRangeDisplayed;
		if(isLoading) return <h1>Spinner</h1>;
		if(error) return <h1>Something went wrong</h1>;
		return (
			<>
				<UsersFilter
					changeFilterOption={changeFilterOption}
					listData={usersList}
					filteringFieldsNames={filteringFieldsNames}/>
				<UsersList listData={filterList.slice(currentPage*pageRangeDisplayed, (currentPage+1)*pageRangeDisplayed)}/>
				<ReactPaginate
					onPageChange={({ selected })=> changeCurrentPage(selected)}
					pageRangeDisplayed={pageRangeDisplayed}
					marginPagesDisplayed={0}
					pageCount={pageCount}
					initialPage={currentPage}
					forcePage={currentPage}
					{...classes}/>}
			</>)
	}
	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		return (
			<div>
				<h1>
					Users
				</h1>
				{this.renderAll()}
			</div>
		)
	}
}
const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = dispatch => (
	{
		fetchUsers: () => dispatch(fetchUsers()),
		changeFilterOption: option => dispatch(changeFilterOption(option)),
		changeCurrentPage: selected => dispatch(changeCurrentPage(selected))
	});


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Users));