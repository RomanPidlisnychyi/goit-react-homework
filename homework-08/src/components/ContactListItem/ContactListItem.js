import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { phoneBookOperations } from '../../redux/phoneBook';
import { Li, Button, Span } from './styles';

export default function ContactListItem({ item: { id, name, number } }) {
    const dispatch = useDispatch();

    const removeContact = () => dispatch(phoneBookOperations.deleteContact(id));
    return (
        <Li>
            <span>{name}</span>
            <Span>
                {number}
                <Button type="button" onClick={removeContact} />
            </Span>
        </Li>
    );
}

ContactListItem.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    }),
};
