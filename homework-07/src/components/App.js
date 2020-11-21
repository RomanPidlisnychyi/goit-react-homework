import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import phoneBookActions from '../redux/phoneBook/phoneBookActions';
import phoneBookSelectors from '../redux/phoneBook/phoneBookSelectors';
import Layout from './Layout';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactListContainer';
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
    isNameAlreadyExist: phoneBookSelectors.getIsNameAlreadyExist(state),
});

const mapDispatchToProps = {
    togglerFlag: phoneBookActions.togglerFlag,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
