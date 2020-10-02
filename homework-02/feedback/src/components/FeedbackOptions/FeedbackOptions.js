import React from 'react';
import { Button } from '../styles';
import PropTypes from 'prop-types';

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
