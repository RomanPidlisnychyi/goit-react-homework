import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { phoneBookSelectors, phoneBookActions } from '../redux/phoneBook';
import { authSelectors, authOperations } from '../redux/auth';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { InfoMessage } from '../components/styles';
import Navigation from '../components/Navigation/Navigation';

export default function HomeView() {
    const dispatch = useDispatch();
    const isNameAlreadyExist = useSelector(
        phoneBookSelectors.getIsNameAlreadyExist,
    );

    if (isNameAlreadyExist) {
        setTimeout(() => {
            dispatch(phoneBookActions.togglerFlag());
        }, 2000);
    }

    const name = useSelector(authSelectors.getUserName);
    const token = useSelector(authSelectors.getToken);
    const isLoading = useSelector(authSelectors.getIsLoading);

    useEffect(() => {
        if (!name && token) {
            dispatch(authOperations.getCurrentUser());
        }
    }, [name, token, dispatch]);
    return (
        !isLoading &&
        name && (
            <Layout>
                <Navigation />
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
        )
    );
}
