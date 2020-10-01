import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    /* display: flex; */
`;

export default function Layout({ children }) {
    return <Container>{children}</Container>;
}

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};
