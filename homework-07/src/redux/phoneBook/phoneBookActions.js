import { createAction } from '@reduxjs/toolkit';

const createContactRequest = createAction('CREATE_CONTACT_REQUEST');
const createContactSuccess = createAction('CREATE_CONTACT_SUCCESS');
const createContactFailed = createAction('CREATE_CONTACT_FAILED');
const createContactError = createAction('CREATE_CONTACT_ERROR');

const fetchContactsRequest = createAction('FETCH_CONTACT_REQUEST');
const fetchContactsSuccess = createAction('FETCH_CONTACT_SUCCESS');
const fetchContactsError = createAction('FETCH_CONTACT_ERROR');

const removeContactRequest = createAction('REMOVE_CONTACT_REQUEST');
const removeContactSuccess = createAction('REMOVE_CONTACT_SUCCESS');
const removeContactError = createAction('REMOVE_CONTACT_ERROR');

const togglerFlag = createAction('CHANGE_FLAG');
const filter = createAction('FILTER');

export default {
    createContactRequest,
    createContactSuccess,
    createContactFailed,
    createContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    togglerFlag,
    filter,
};
