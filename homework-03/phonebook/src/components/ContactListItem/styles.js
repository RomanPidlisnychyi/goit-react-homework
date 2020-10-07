import styled from 'styled-components';

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;

const Button = styled.button`
    margin-left: 5px;
    outline: none;
    padding: 0 5px;
    border: 1px solid grey;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 255, 0.3);
    }
`;

export { Li, Button };
