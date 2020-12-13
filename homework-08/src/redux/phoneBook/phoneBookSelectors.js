import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;
const getIsNameAlreadyExist = state => state.contacts.isNameAlreadyExist;

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
    getLoading,
    getIsNameAlreadyExist,
    getFiltredContacts,
    getContactById,
};
