import styled from 'styled-components';

const Button = styled.button`
    margin: 5px;
    padding: 3px 7px;
    font-weight: 700;
    outline: none;
    border: 1px solid grey;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background-color: rgba(170, 170, 170, 0.4);
    }
`;

const Container = styled.div`
    /* display: flex; */
`;

const Title = styled.h2`
    margin: 20px 0;
`;

const Paragraph = styled.p`
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export { Button, Container, Title, Paragraph };
