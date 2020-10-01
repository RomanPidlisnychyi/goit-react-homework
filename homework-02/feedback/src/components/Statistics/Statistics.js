import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) {
    return (
        <>
            <Paragraph>Good: {good}</Paragraph>
            <Paragraph>Neutral: {neutral}</Paragraph>
            <Paragraph>Bad: {bad}</Paragraph>
            <Paragraph>Total: {total}</Paragraph>
            <Paragraph>Positive feedback: {positivePercentage}%</Paragraph>
        </>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};
