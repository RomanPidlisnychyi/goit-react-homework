import React from 'react';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';

export default function ContactList({ filtredName, onRemove }) {
    return (
        <ul>
            {filtredName.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onRemove={onRemove}
                />
            ))}
        </ul>
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
