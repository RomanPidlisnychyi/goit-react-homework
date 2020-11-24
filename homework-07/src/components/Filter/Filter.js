import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phoneBookActions from '../../redux/phoneBook/phoneBookActions';
import phoneBookSelectors from '../../redux/phoneBook/phoneBookSelectors';
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
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
};

const mapStateToProps = state => ({
    filterValue: phoneBookSelectors.getFilter(state),
    items: phoneBookSelectors.getContacts(state),
});

const mapDispatchToProps = {
    onFilter: phoneBookActions.filter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
