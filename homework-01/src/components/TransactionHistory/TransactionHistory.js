import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableHeadRow, TableRow } from './styles';

function TransactionHistory({ items }) {
    return (
        <Table>
            <TableHead>
                <TableHeadRow>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TableHeadRow>
            </TableHead>

            <tbody>
                {items.map(item => (
                    <TableRow key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }).isRequired,
    ),
};

export default TransactionHistory;
