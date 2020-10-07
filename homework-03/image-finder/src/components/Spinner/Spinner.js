import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import Container from './styles';

export default class Spinner extends Component {
    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number,
    };

    render() {
        return (
            <Container>
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={this.props.height}
                    width={this.props.width}
                    timeout={3000} //3 secs
                />
            </Container>
        );
    }
}
