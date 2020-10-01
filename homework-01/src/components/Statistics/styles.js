import styled from 'styled-components';

function randomColor() {
    return (
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f3f6;
    border: 1px solid black;
    width: 375px;
    height: 252px;
    margin-bottom: 20px;
`;

const Title = styled.h2`
    text-transform: uppercase;
    font-size: 16px;
    color: #475965;
    font-weight: 600;
    margin-bottom: 25px;
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    width: 90%;
`;

const ListItem = styled.li`
    display: flex;
    width: ${props => 100 / props.countItem}%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: ${props => props.color};
`;

const Percentage = styled.span`
    font-size: 18px;
    color: #fff;
`;

const Label = styled(Percentage)`
    font-size: 12px;
    margin-bottom: 7px;
`;

export { randomColor, Container, Title, List, ListItem, Label, Percentage };
