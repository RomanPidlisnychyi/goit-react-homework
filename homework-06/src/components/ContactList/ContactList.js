import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactListItem from '../ContactListItem';
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
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        }).isRequired,
    ),
    filter: PropTypes.string,
};

const mapStateToProps = state => {
    const { items, filter } = state;
    const filtredItems = items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return {
        items: filtredItems,
    };
};

export default connect(mapStateToProps)(ContactList);
