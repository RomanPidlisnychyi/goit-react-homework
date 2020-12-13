import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { Form } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import Styles from '../SingUpForm/styles';

export default function SingInForm() {
    const dispatch = useDispatch();

    const isLoading = useSelector(authSelectors.getIsLoading);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
    };

    const emailValid = email !== '' && email.includes('@');

    const passwordValid = password !== '' && password.length > 7;

    const btnActive = emailValid && passwordValid;

    return (
        <Form onSubmit={handleSubmit}>
            <Styles.FormGroup controlId="formBasicEmail">
                <Styles.EmailLabel />
                <Styles.EmailInput
                    isValid={emailValid}
                    type="email"
                    placeholder="email@example.com"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                {!emailValid && email !== '' && (
                    <Styles.Span>Incorrect email!</Styles.Span>
                )}
            </Styles.FormGroup>

            <Styles.FormGroup controlId="formBasicPassword">
                <Styles.PasswordLabel />
                <Styles.PasswordInput
                    isValid={passwordValid}
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                {!passwordValid && password !== '' && (
                    <Styles.Span>
                        the password must be at least 8 characters long!
                    </Styles.Span>
                )}
            </Styles.FormGroup>

            <Styles.MyButton
                variant="outline-primary"
                type="submit"
                disabled={!btnActive}
            >
                {!isLoading ? (
                    'SingIn'
                ) : (
                    <Loader color="#007bff" height={22} width={45} />
                )}
            </Styles.MyButton>
            <Styles.MyLink to="/register">SingUp</Styles.MyLink>
        </Form>
    );
}
