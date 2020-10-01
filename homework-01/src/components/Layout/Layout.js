import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Layout({ children }) {
    return <Container>{children}</Container>;
}

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};

export default Layout;
