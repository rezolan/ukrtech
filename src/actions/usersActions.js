import {
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_ERROR,
	CHANGE_FILTER_OPTION,
	CHANGE_CURRENT_PAGE } from '../constants/actionTypes';
import { store } from '../store';

export const fetchUsers = () => dispatch => {
	dispatch({type: FETCH_USERS_REQUEST});
	fetch('http://localhost:4000/fetch-users')
		.then(res => {
			return res.json();
		})
		.then(payload => {
			dispatch({type: FETCH_USERS_SUCCESS, payload});
		})
		.catch(error => {
			dispatch({type: FETCH_USERS_ERROR, payload: error});
		})
};

export const changeFilterOption = payload => dispatch => {
	const state = store.getState().users;
	const filteringFields = {...state.filteringFields, ...payload};
	const filterList = state.usersList.filter(user => {
		for(const field in filteringFields) {
			if(!filteringFields[field]) continue;
			if(filteringFields[field].value !== user[field]) return false;
		}
		return true;
	});
	dispatch({type: CHANGE_FILTER_OPTION, payload: {filterList, filteringFields}});
};

export const changeCurrentPage = payload => dispatch => {
	dispatch({type: CHANGE_CURRENT_PAGE, payload});
};