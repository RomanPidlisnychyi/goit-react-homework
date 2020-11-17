import { createAction } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const constactCreator = (name, phone) => ({
    payload: {
        id: uuid(),
        name,
        phone,
    },
});

export const createContact = createAction('CREATE_CONTACT', constactCreator);
export const togglerFlag = createAction('CHANGE_FLAG');
export const removeContact = createAction('REMOVE_CONTACT');
export const filter = createAction('FILTER');
