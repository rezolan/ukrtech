import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { UsersList } from '../components/UsersList';
import { UsersFilter } from '../components/UsersFilter';
import { fetchUsers } from '../actions/index.js';


class Users extends PureComponent {
	componentDidMount() {
		this.props.fetchUsers();
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<h1>
					Users
				</h1>
				{/*<UsersFilter/>*/}
				{/*<UsersList/>*/}
			</div>
		)
	}
}
const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = dispatch => ({ fetchUsers: () => dispatch(fetchUsers())});


export default connect(mapStateToProps, mapDispatchToProps)(Users);