import phoneBookActions from './phoneBookActions';
import phoneBookSelectors from './phoneBookSelectors';
import { authSelectors } from '../auth';

const baseURL = 'https://goit-phonebook-api.herokuapp.com';

const getContacts = () => (dispatch, getState) => {
    dispatch(phoneBookActions.fetchContactsRequest(getState()));

    const token = authSelectors.getToken(getState());

    const options = {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };

    fetch(`${baseURL}/contacts`, options)
        .then(response => response.json())
        .then(data => dispatch(phoneBookActions.fetchContactsSuccess(data)))
        .catch(error => dispatch(phoneBookActions.fetchContactsError(error)));
};

const setContact = (name, number) => (dispatch, getState) => {
    dispatch(phoneBookActions.createContactRequest());

    const contacts = phoneBookSelectors.getContacts(getState());

    const isContactExist = contacts.find(contact => contact.name === name);

    if (isContactExist) {
        dispatch(phoneBookActions.togglerFlag());
        dispatch(phoneBookActions.createContactFailed());
        return;
    }

    const token = authSelectors.getToken(getState());

    const options = {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, number }),
    };

    fetch(`${baseURL}/contacts`, options)
        .then(response => response.json())
        .then(data => dispatch(phoneBookActions.createContactSuccess(data)))
        .catch(error => dispatch(phoneBookActions.createContactError(error)));
};

const deleteContact = id => (dispatch, getState) => {
    dispatch(phoneBookActions.removeContactRequest());

    const token = authSelectors.getToken(getState());

    const options = {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };

    fetch(`${baseURL}/contacts/${id}`, options)
        .then(response => response.json())
        .then(() => dispatch(phoneBookActions.removeContactSuccess(id)))
        .catch(error => dispatch(phoneBookActions.removeContactError(error)));
};

export default { getContacts, setContact, deleteContact };
