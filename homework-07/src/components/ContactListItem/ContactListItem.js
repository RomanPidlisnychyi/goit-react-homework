import React from 'react';
import { connect } from 'react-redux';
import phoneBookOperations from '../../redux/phoneBook/phoneBookOperations';
import phoneBookSelectors from '../../redux/phoneBook/phoneBookSelectors';
import { Li, Button, Span } from './styles';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, removeContact }) => (
    <Li>
        <span>{name}</span>
        <Span>
            {number}
            <Button type="button" onClick={removeContact} />
        </Span>
    </Li>
);

ContactListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    number: PropTypes.string,
    removeContact: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
    ...phoneBookSelectors.getContactById(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeContact: () =>
        dispatch(phoneBookOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
