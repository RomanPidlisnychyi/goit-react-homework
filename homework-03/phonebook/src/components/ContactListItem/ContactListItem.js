import React from 'react';
import { Li, Button } from './styles';
import PropTypes from 'prop-types';

export default function ContactListItem({ id, name, number, onRemove }) {
    return (
        <Li>
            <span>
                {name}: {number}
            </span>
            <Button type="button" onClick={e => onRemove(id)}>
                Delete
            </Button>
        </Li>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onRemove: PropTypes.func,
};
