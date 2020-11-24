import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import phoneBookActions from './phoneBookActions';

const items = createReducer([], {
    [phoneBookActions.fetchContactsSuccess]: (state, action) => action.payload,
    [phoneBookActions.createContactSuccess]: (state, action) => [
        ...state,
        action.payload,
    ],
    [phoneBookActions.removeContactSuccess]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
});

const isNameAlreadyExist = createReducer(false, {
    [phoneBookActions.togglerFlag]: (state, action) => !state,
});

const filter = createReducer('', {
    [phoneBookActions.filter]: (state, action) => action.payload,
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
