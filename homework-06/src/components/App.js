import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { togglerFlag } from '../redux/phoneBook/phoneBookActions';
import Layout from './Layout';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Title, InfoMessage } from './styles';

const App = ({ isNameAlreadyExist, togglerFlag }) => {
    if (isNameAlreadyExist) {
        setTimeout(() => {
            togglerFlag();
        }, 2000);
    }
    return (
        <Layout>
            <CSSTransition in appear classNames="Title-fade" timeout={500}>
                <Title>Phonebook</Title>
            </CSSTransition>
            <ContactForm />
            <Filter />
            <ContactList />
            <CSSTransition
                in={isNameAlreadyExist}
                classNames="InfoMessage-fade"
                timeout={250}
                unmountOnExit
            >
                <InfoMessage>Contact already exists!</InfoMessage>
            </CSSTransition>
        </Layout>
    );
};

const mapStateToProps = state => ({
    isNameAlreadyExist: state.isNameAlreadyExist,
});

const mapDispatchToProps = {
    togglerFlag,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
