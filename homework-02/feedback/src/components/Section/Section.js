import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
    margin: 20px 0;
`;
export default function Section({ title, children }) {
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};
