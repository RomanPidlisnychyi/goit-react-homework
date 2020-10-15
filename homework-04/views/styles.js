import styled from 'styled-components';

const Card = styled.div`
    display: flex;
`;

const Img = styled.img`
    width: 250px;
    margin: 0 20px 5px 0;
`;

const Button = styled.button`
    border: none;
    background: url('https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767515-1502579.png')
        left/20% no-repeat transparent;
    padding-left: 15px;
    margin-left: 10px;
    &:hover {
        cursor: pointer;
    }
`;

const Info = styled.div`
    border: 1px solid grey;
`;

export { Card, Img, Button, Info };
