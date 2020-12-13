import styled from 'styled-components';

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    box-shadow: 1px 1px 3px grey;
`;

const Button = styled.button`
    position: relative;
    margin-left: 10px;
    color: #fff;
    font-size: 25px;
    width: 25px;
    height: 25px;
    outline: none;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: #f1392d;
    &:hover {
        cursor: pointer;
        background-color: #b2261b;
    }
    &::before {
        content: '+';
        position: absolute;
        top: 50%;
        left: -3px;
        transform: rotate(45deg) translate(-50%, -50%);
    }
`;

const Span = styled.span`
    display: flex;
    align-items: center;
`;

export { Li, Button, Span };
