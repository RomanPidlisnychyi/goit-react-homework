import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { authSelectors, authActions } from '../redux/auth';
import SingUpForm from '../components/SingUpForm/SingUpForm';
import Layout from '../components/Layout';
import { InfoMessage } from '../components/styles';

export default function RegisterView() {
    const dispatch = useDispatch();

    const isEmailAlreadyExist = useSelector(authSelectors.getError);

    if (isEmailAlreadyExist) {
        setTimeout(() => {
            dispatch(authActions.registerCleanError());
        }, 2000);
    }
    return (
        <Layout>
            <SingUpForm />
            <CSSTransition
                in={isEmailAlreadyExist}
                classNames="InfoMessage-fade"
                timeout={250}
                unmountOnExit
            >
                <InfoMessage>This email already used!</InfoMessage>
            </CSSTransition>
        </Layout>
    );
}
