import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { authSelectors, authActions } from '../redux/auth';
import { InfoMessage } from '../components/styles';
import SingInForm from '../components/SingInForm/SingInForm';
import Layout from '../components/Layout';

const LoginView = () => {
    const dispatch = useDispatch();

    const isUserLoginError = useSelector(authSelectors.getError);

    if (isUserLoginError) {
        setTimeout(() => {
            dispatch(authActions.registerCleanError());
        }, 2000);
    }
    return (
        <Layout>
            <SingInForm />
            <CSSTransition
                in={isUserLoginError}
                classNames="InfoMessage-fade"
                timeout={250}
                unmountOnExit
            >
                <InfoMessage>Invalid email or password!</InfoMessage>
            </CSSTransition>
        </Layout>
    );
};

export default LoginView;
