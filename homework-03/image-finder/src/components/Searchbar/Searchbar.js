import React, { Component } from 'react';
import { Header, Form, Button, Label, Input } from './styles';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
    };

    state = {
        queryString: '',
    };

    handlerInput = e => {
        this.setState({ queryString: e.target.value });
    };

    handlerFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.queryString);
        this.setState({ queryString: '' });
    };
    render() {
        return (
            <Header>
                <Form onSubmit={this.handlerFormSubmit}>
                    <Button type="submit">
                        <Label>Search</Label>
                    </Button>

                    <Input
                        type="text"
                        onChange={this.handlerInput}
                        value={this.state.queryString}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </Form>
            </Header>
        );
    }
}
