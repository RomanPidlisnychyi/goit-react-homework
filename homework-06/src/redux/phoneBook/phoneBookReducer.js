import { createReducer } from '@reduxjs/toolkit';
import {
    createContact,
    togglerFlag,
    removeContact,
    filter,
} from './phoneBookActions';

const initialState = {
    items: [],
    filter: '',
    isNameAlreadyExist: false,
};

const setContact = (state, action) => {
    const isNameExist = state.items.find(
        item => item.name === action.payload.name,
    );
    return isNameExist
        ? { ...state, isNameAlreadyExist: !state.isNameAlreadyExist }
        : { ...state, items: [action.payload, ...state.items] };
};

const toggleFlag = (state, action) => ({
    ...state,
    isNameAlreadyExist: !state.isNameAlreadyExist,
});

const onRemoveContact = (state, action) => {
    const newContacts = state.items.filter(item => item.id !== action.payload);
    return { ...state, items: [...newContacts] };
};

const onFilter = (state, action) => ({ ...state, filter: action.payload });

const contactsReducer = createReducer(initialState, {
    [createContact]: setContact,
    [togglerFlag]: toggleFlag,
    [removeContact]: onRemoveContact,
    [filter]: onFilter,
});

export default contactsReducer;
