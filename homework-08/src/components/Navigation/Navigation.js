import React from 'react';
import { CSSTransition } from 'react-transition-group';
import UserMenu from '../UserMenu/UserMenu';
import { Title } from '../styles';
import styles from './styles.module.css';

export default function Navigation() {
    return (
        <div className={styles.container}>
            <CSSTransition in appear classNames="Title-fade" timeout={500}>
                <Title>Phonebook</Title>
            </CSSTransition>
            <CSSTransition in appear classNames="UserMenu-fade" timeout={500}>
                <UserMenu />
            </CSSTransition>
        </div>
    );
}
