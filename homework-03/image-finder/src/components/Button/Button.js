import React, { Component } from 'react';
import Btn from './styles';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        scrollTo: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.scrollTo();
    }
    render() {
        return (
            <Btn onClick={this.props.onClick} type="button">
                Load more
            </Btn>
        );
    }
}
