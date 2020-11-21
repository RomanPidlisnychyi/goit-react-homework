import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Title, Input, Button } from './styles';
import PropTypes from 'prop-types';
import phoneBookOperations from '../../redux/phoneBook/phoneBookOperations';

class ContactForm extends Component {
    static propTypes = {
        postContact: PropTypes.func,
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
        this.props.postContact(name, number);
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
    postContact: phoneBookOperations.setContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
