import { Input } from '../ContactForm/styles';
import styled from 'styled-components';

const Container = styled.div`
    box-shadow: 1px 1px 3px grey;
    padding: 10px;
    margin-bottom: 20px;
`;

const FilterInput = styled(Input)`
    margin-bottom: 0;
`;

export { Container, FilterInput };
