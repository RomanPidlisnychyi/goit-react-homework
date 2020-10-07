import React, { Component } from 'react';
import Layout from './Layout';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Title from './styles';

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

    componentDidMount() {
        const parcedLocalStorage = JSON.parse(localStorage.getItem('contacts'));

        this.setState({
            contacts: parcedLocalStorage
                ? parcedLocalStorage
                : this.state.contacts,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacts.length !== this.state.contacts.length) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts),
            );
            if (this.state.contacts.length < 1) {
                localStorage.removeItem('contacts');
            }
        }
    }

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

    nameValidator = contact => {
        const { contacts } = this.state;

        return contacts.find(({ name }) => name === contact.name);
    };

    addContact = contact => {
        this.setState(state => {
            return !this.nameValidator(contact)
                ? {
                      contacts: [...state.contacts, contact],
                      filter: '',
                  }
                : window.alert(`${contact.name} is already in contacts.`);
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
        const { contacts, filter } = this.state;
        const filtredName = this.handlerFilter();
        return (
            <Layout>
                <Title>Phonebook</Title>
                <ContactForm
                    handlerSubmit={this.addContact}
                    contacts={contacts}
                />
                <Title>Contacts</Title>
                {contacts.length > 1 && (
                    <Filter onInputChange={this.handlerInput} value={filter} />
                )}
                {contacts.length > 0 && (
                    <ContactList
                        filtredName={filtredName}
                        onRemove={this.removeContact}
                    />
                )}
            </Layout>
        );
    }
}
