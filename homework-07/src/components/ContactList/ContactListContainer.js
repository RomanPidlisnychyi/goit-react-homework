import React, { Component } from 'react';
import { connect } from 'react-redux';
import phoneBookSelectors from '../../redux/phoneBook/phoneBookSelectors';
import phoneBookOperations from '../../redux/phoneBook/phoneBookOperations';
import ContactList from './ContactList';

class ContactListContainer extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        return <ContactList {...this.props} />;
    }
}

const mapStateToProps = state => ({
    items: phoneBookSelectors.getFiltredContacts(state),
});

export default connect(mapStateToProps, {
    fetchContacts: phoneBookOperations.getContacts,
})(ContactListContainer);
