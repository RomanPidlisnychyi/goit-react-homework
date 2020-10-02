import React, { Component } from 'react';
import uuid from 'react-uuid';
import { Form, Title, Input, Button } from './styles';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handlerInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handlerSubmit = () => {
        const { name, number } = this.state;
        const contact = {
            name: name,
            number: number,
            id: uuid(),
        };

        this.setState({ name: '', number: '' });

        return contact;
    };

    render() {
        const { name, number } = this.state;
        return (
            <Form
                onSubmit={e =>
                    this.props.handlerSubmit(e, this.handlerSubmit())
                }
            >
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
                <Button type="submit">Add contact</Button>
            </Form>
        );
    }
}

ContactForm.propTypes = {
    handlerSubmit: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
};
