import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default function ContactListItem({ id, name, number, onRemove }) {
    return (
        <Li>
            <span>
                {name}: {number}
            </span>
            <Button type="button" onClick={e => onRemove(id)}>
                Delete
            </Button>
        </Li>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onRemove: PropTypes.func,
};
