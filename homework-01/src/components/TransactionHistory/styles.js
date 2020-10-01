import styled from 'styled-components';

const Table = styled.table`
    width: 850px;
`;

const TableHead = styled.thead`
    text-transform: uppercase;
    font-size: 13px;
    color: #fff;
`;

const TableHeadRow = styled.tr`
    height: 50px;
    background-color: #00bcd4;
`;

const TableRow = styled.tr`
    height: 50px;
    text-align: center;
    font-size: 15px;
    color: #5c6975;
    &:nth-child(2n) {
        background-color: #ecf2f3;
    }
`;

export { Table, TableHead, TableHeadRow, TableRow };
