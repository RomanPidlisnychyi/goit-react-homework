import styled from 'styled-components';

const Form = styled.form`
    border: 1px solid grey;
    padding: 5px;
`;

const Title = styled.h3`
    margin: 5px;
`;

const Input = styled.input`
    margin-bottom: 15px;
`;

const Button = styled.button`
    outline: none;
    padding: 2px 5px;
    border: 1px solid grey;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 255, 0.3);
    }
`;

export { Form, Title, Input, Button };
