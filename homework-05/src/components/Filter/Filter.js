import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../ContactForm/styles';
import { Container, FilterInput } from './styles';

export default function Filter({ onInputChange, value }) {
    return (
        <Container>
            <Title>Find contacts by name</Title>
            <FilterInput
                type="text"
                value={value}
                name="filter"
                onChange={onInputChange}
            />
        </Container>
    );
}

Filter.propTypes = {
    onInputChange: PropTypes.func,
    value: PropTypes.string,
};
