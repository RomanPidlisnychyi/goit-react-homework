import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ onInputChange, value }) {
    return (
        <>
            <h3>Find contacts by name</h3>
            <input
                type="text"
                value={value}
                name="filter"
                onChange={onInputChange}
            />
        </>
    );
}

Filter.propTypes = {
    onInputChange: PropTypes.func,
    value: PropTypes.string,
};
