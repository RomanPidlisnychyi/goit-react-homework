import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContact } from '../../redux/phoneBook/phoneBookActions';
import { Form, Title, Input, Button } from './styles';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    static propTypes = {
        createContact: PropTypes.func,
    };

    state = {
        name: '',
        number: '',
    };

    handlerInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handlerSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.createContact(name, number);
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        const avalibleContact = name !== '' && number !== '';

        return (
            <Form onSubmit={this.handlerSubmit}>
                <Title>Name</Title>
                <Input
                    type="text"
                    value={name}
                    name="name"
                    onChange={this.handlerInput}
                />
                <Title>Number</Title>
                <Input
                    type="text"
                    value={number}
                    name="number"
                    onChange={this.handlerInput}
                />
                <br />
                <Button type="submit" disabled={!avalibleContact}>
                    Add contact
                </Button>
            </Form>
        );
    }
}

const mapDispatchToProps = {
    createContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
