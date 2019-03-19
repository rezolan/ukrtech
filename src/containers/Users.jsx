import React, { PureComponent } from 'react';
import { UsersList } from '../components/UsersList';


class Users extends PureComponent {
	render() {
		return (
			<div>
				<h1>
					Users
				</h1>
				<UsersList/>
			</div>
		)
	}
}

export default Users;