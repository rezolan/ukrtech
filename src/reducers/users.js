import {
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_ERROR,
	CHANGE_FILTER_OPTION,
	CHANGE_CURRENT_PAGE } from '../constants/actionTypes';


const InitialState = {
	usersList: [],
	filterList: [],
	filteringFieldsNames: {
		name: 'Name',
		date: 'BirthYear',
		country: 'Country'
	},
	filteringFields: {},
	currentPage: 0,
	isLoading: true,
	error: null
};

export const users = (state = InitialState, { type, payload }) => {
	switch(type) {
		case FETCH_USERS_REQUEST:
			return {...state, isLoading: true};
		case FETCH_USERS_SUCCESS:
			return {...state, usersList: [...payload], filterList: [...payload], isLoading: false};
		case FETCH_USERS_ERROR:
			return {...state, error: payload, isLoading: false};
		case CHANGE_FILTER_OPTION:
			return {...state, ...payload, currentPage: 0};
		case CHANGE_CURRENT_PAGE:
			return {...state, currentPage: payload};
		default:
			return {...state};
	}
};