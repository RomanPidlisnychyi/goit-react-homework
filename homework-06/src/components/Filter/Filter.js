import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filter } from '../../redux/phoneBook/phoneBookActions';
import { Title } from '../ContactForm/styles';
import { Container, FilterInput } from './styles';

const Filter = ({ filterValue, items, onFilter }) => {
    const handlerFilter = e => onFilter(e.target.value);
    return (
        items.length > 1 && (
            <Container>
                <Title>Find contacts by name</Title>
                <FilterInput
                    type="text"
                    value={filterValue}
                    name="filter"
                    onChange={handlerFilter}
                />
            </Container>
        )
    );
};

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filterValue: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        }).isRequired,
    ),
};

const mapStateToProps = state => ({
    filterValue: state.filter,
    items: state.items,
});

const mapDispatchToProps = {
    onFilter: filter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
