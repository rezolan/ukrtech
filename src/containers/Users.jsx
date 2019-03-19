import React, { PureComponent } from 'react';
import { UsersList } from '../components/UsersList';
import { UsersFilter } from '../components/UsersFilter';


class Users extends PureComponent {
	render() {
		return (
			<div>
				<h1>
					Users
				</h1>
				<UsersFilter/>
				<UsersList/>
			</div>
		)
	}
}

export default Users;