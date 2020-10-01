import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e7ecf2;
    border: 1px solid black;
    width: 430px;
    height: 500px;
    margin-bottom: 20px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 250px;
    height: 330px;
    background-color: #ffffff;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Img = styled.img`
    width: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

const Name = styled.p`
    font-size: 18px;
    font-weight: 700;
`;

const Tag = styled.p`
    font-size: 14px;
    color: #768696;
    margin-top: 10px;
`;

const StatsList = styled.ul`
    display: flex;
    list-style: none;
    height: 75px;
    border: 1px solid #bfcdde;
    width: 100%;
    margin-top: 20px;
`;

const StatsListItem = styled.li`
    display: flex;
    width: 33.3%;
    flex-direction: column;
    border-right: 1px solid #bfcdde;
    justify-content: center;
    align-items: center;
    &:last-child {
        border-right: none;
    }
`;

const Label = styled.span`
    font-size: 14px;
    color: #768696;
    margin-bottom: 5px;
`;

const Quantity = styled.span`
    font-weight: 700;
`;

export {
    Section,
    Container,
    Description,
    Img,
    Name,
    Tag,
    StatsList,
    StatsListItem,
    Label,
    Quantity,
};
