import React from 'react';
import { connect } from 'react-redux';
import { removeContact } from '../../redux/phoneBook/phoneBookActions';
import { Li, Button, Span } from './styles';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, phone, removeContact }) => (
    <Li>
        <span>{name}</span>
        <Span>
            {phone}
            <Button type="button" onClick={removeContact} />
        </Span>
    </Li>
);

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    removeContact: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
    const contact = state.items.find(item => item.id === ownProps.id);
    return {
        ...contact,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeContact: () => dispatch(removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
