import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phoneBookActions, phoneBookSelectors } from '../../redux/phoneBook';
import { Title } from '../ContactForm/styles';
import { Container, FilterInput } from './styles';

export default function Filter() {
    const items = useSelector(phoneBookSelectors.getContacts);

    const filterValue = useSelector(phoneBookSelectors.getFilter);

    const dispatch = useDispatch();

    const handlerFilter = e =>
        dispatch(phoneBookActions.filter(e.target.value));

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
}
