import React, { PureComponent } from 'react';
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
	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		const { pageRangeDisplayed } = this.state;
		const {
			changeFilterOption,
			changeCurrentPage,
			users: { usersList, filterList, filteringFieldsNames, currentPage },
			classes: { paginationContainer }
		} = this.props;
		const pageCount = filterList.length / pageRangeDisplayed;
		return (
			<div>
				<h1>
					Users
				</h1>
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
					containerClassName={paginationContainer}/>
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