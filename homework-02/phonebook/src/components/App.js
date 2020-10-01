import React, { Component } from 'react';
import Layout from './Layout';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import styled from 'styled-components';

const Title = styled.h2`
    margin: 15px 0;
`;

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    handlerInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handlerFilter = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    nameValidator = obj => {
        const { contacts } = this.state;

        return contacts.find(({ name }) => name === obj.name);
    };

    addContact = (e, obj) => {
        e.preventDefault();
        this.setState(state => {
            return !this.nameValidator(obj)
                ? {
                      contacts: [...state.contacts, obj],
                      filter: '',
                  }
                : window.alert(`${obj.name} is already in contacts.`);
        });
    };

    removeContact = contactId => {
        this.setState(state => {
            return {
                contacts: state.contacts.filter(({ id }) => id !== contactId),
                filter: '',
            };
        });
    };

    render() {
        const {
            state,
            addContact,
            handlerInput,
            handlerFilter,
            removeContact,
        } = this;
        const { contacts, filter } = state;
        const filtredName = handlerFilter();
        return (
            <Layout>
                <Title>Phonebook</Title>
                <ContactForm handlerSubmit={addContact} contacts={contacts} />
                <Title>Contacts</Title>
                {contacts.length > 1 && (
                    <Filter onInputChange={handlerInput} value={filter} />
                )}

                {contacts.length > 0 && (
                    <ContactList
                        filtredName={filtredName}
                        onRemove={removeContact}
                    />
                )}
            </Layout>
        );
    }
}
