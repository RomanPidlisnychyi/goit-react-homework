import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';

export default function ContactList({ filtredName, onRemove }) {
    return (
        <TransitionGroup component="ul">
            {filtredName.map(({ id, name, number }) => (
                <CSSTransition
                    key={id}
                    classNames="ContactList-fade"
                    timeout={250}
                >
                    <ContactListItem
                        id={id}
                        name={name}
                        number={number}
                        onRemove={onRemove}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

ContactList.propTypes = {
    filtredName: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
    onRemove: PropTypes.func,
};
