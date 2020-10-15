import React, { Component } from 'react';
import Form from './styles';

export default class Searchbox extends Component {
    state = { value: '' };

    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
            </Form>
        );
    }
}
