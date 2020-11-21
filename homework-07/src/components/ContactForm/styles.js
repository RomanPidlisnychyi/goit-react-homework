import styled from 'styled-components';

const Form = styled.form`
    box-shadow: 1px 1px 3px grey;
    padding: 10px;
    margin-bottom: 20px;
`;

const Title = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 3px;
    &:active,
    :focus {
        outline: none;
        border-color: #3645ac;
    }
`;

const Button = styled.button`
    outline: none;
    padding: 5px;
    border: 1px solid transparent;
    color: #fff;
    background-color: #3645ac;
    border-radius: 3px;
    box-shadow: 1px 1px 3px #3645ac;
    width: 100%;
    &:hover {
        cursor: pointer;
        background-color: #243398;
    }
    &:disabled {
        background-color: grey;
    }
`;

export { Form, Title, Input, Button };
