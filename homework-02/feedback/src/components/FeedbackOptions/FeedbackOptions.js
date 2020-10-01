import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default function FeedbackOptions({ onLeaveFeedback }) {
    return (
        <>
            <Button type="button" onClick={() => onLeaveFeedback('good')}>
                Good
            </Button>
            <Button type="button" onClick={() => onLeaveFeedback('neutral')}>
                Neutral
            </Button>
            <Button type="button" onClick={() => onLeaveFeedback('bad')}>
                Bad
            </Button>
        </>
    );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
};
