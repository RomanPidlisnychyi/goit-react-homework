import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.items;
const getFilter = state => state.filter;
const getIsNameAlreadyExist = state => state.isNameAlreadyExist;

const getFiltredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) =>
        contacts.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase()),
        ),
);

const getContactById = createSelector(
    [(state, contactId) => contactId, getFiltredContacts],
    (contactId, contacts) => contacts.find(contact => contact.id === contactId),
);

export default {
    getContacts,
    getFilter,
    getIsNameAlreadyExist,
    getFiltredContacts,
    getContactById,
};
