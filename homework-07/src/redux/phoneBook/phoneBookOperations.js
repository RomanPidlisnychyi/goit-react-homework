import phoneBookActions from './phoneBookActions';

const baseURL =
    'https://my-json-server.typicode.com/RomanPidlisnychyi/goit-react-homework';

const getContacts = () => dispatch => {
    dispatch(phoneBookActions.fetchContactsRequest());

    fetch(`${baseURL}/contacts`)
        .then(response => response.json())
        .then(data => dispatch(phoneBookActions.fetchContactsSuccess(data)))
        .catch(error => dispatch(phoneBookActions.fetchContactsError(error)));
};

const setContact = (name, number) => (dispatch, getState) => {
    dispatch(phoneBookActions.createContactRequest());

    const contacts = getState().items;

    const isContactExist = contacts.find(contact => contact.name === name);

    if (isContactExist) {
        dispatch(phoneBookActions.togglerFlag());
        dispatch(phoneBookActions.createContactFailed());
        return;
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, number, id: contacts.length + 1 }),
    };

    fetch(`${baseURL}/contacts`, options)
        .then(response => response.json())
        .then(data => dispatch(phoneBookActions.createContactSuccess(data)))
        .catch(error => dispatch(phoneBookActions.createContactError(error)));
};

const deleteContact = id => dispatch => {
    dispatch(phoneBookActions.removeContactRequest());

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(`${baseURL}/contacts/${id}`, options)
        .then(response => response.json())
        .then(() => dispatch(phoneBookActions.removeContactSuccess(id)))
        .catch(error => dispatch(phoneBookActions.createContactError(error)));
};

export default { getContacts, setContact, deleteContact };
