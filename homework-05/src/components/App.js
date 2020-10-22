import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Layout from './Layout';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Title, InfoMessage } from './styles';

const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default class App extends Component {
    state = {
        contacts: contacts,
        filter: '',
        nameAlreadyExist: false,
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
        if (!this.nameValidator(contact)) {
            this.setState(state => ({
                contacts: [contact, ...state.contacts],
                filter: '',
            }));

            return;
        }

        this.setState({ nameAlreadyExist: true });
        setTimeout(() => this.setState({ nameAlreadyExist: false }), 1500);
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
        const { contacts, filter, nameAlreadyExist } = this.state;
        const filtredName = this.handlerFilter();
        return (
            <Layout>
                <CSSTransition
                    in={nameAlreadyExist}
                    appear
                    classNames="InfoMessage-fade"
                    timeout={250}
                    unmountOnExit
                >
                    <InfoMessage>Contact already exists!</InfoMessage>
                </CSSTransition>

                <CSSTransition
                    in={true}
                    appear
                    classNames="Title-fade"
                    timeout={500}
                    unmountOnExit
                >
                    <Title>Phonebook</Title>
                </CSSTransition>
                <ContactForm
                    handlerSubmit={this.addContact}
                    contacts={contacts}
                />
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
