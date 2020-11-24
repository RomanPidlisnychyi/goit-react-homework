import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

function ContactList({ items }) {
    return (
        <TransitionGroup component="ul" in={items.length}>
            {items.map(({ id }) => (
                <CSSTransition
                    key={id}
                    classNames="ContactList-fade"
                    timeout={250}
                >
                    <ContactListItem id={id} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
    filter: PropTypes.string,
};

export default ContactList;
