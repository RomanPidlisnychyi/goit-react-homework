import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import phoneBookActions from './phoneBookActions';
import { authActions } from '../auth';

const items = createReducer([], {
    [phoneBookActions.fetchContactsSuccess]: (_, action) => action.payload,
    [phoneBookActions.createContactSuccess]: (state, action) => [
        ...state,
        action.payload,
    ],
    [phoneBookActions.removeContactSuccess]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
    [authActions.logoutSuccess]: () => [],
});

const isNameAlreadyExist = createReducer(false, {
    [phoneBookActions.togglerFlag]: state => !state,
});

const filter = createReducer('', {
    [phoneBookActions.filter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
    [phoneBookActions.fetchContactsRequest]: () => true,
    [phoneBookActions.fetchContactsSuccess]: () => false,
    [phoneBookActions.fetchContactsError]: () => false,
    [phoneBookActions.createContactRequest]: () => true,
    [phoneBookActions.createContactSuccess]: () => false,
    [phoneBookActions.createContactFailed]: () => false,
    [phoneBookActions.createContactError]: () => false,
    [phoneBookActions.removeContactRequest]: () => true,
    [phoneBookActions.removeContactSuccess]: () => false,
    [phoneBookActions.removeContactError]: () => false,
});

export default combineReducers({
    items,
    filter,
    isNameAlreadyExist,
    loading,
});
