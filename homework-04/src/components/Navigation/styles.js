import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
`;

const LinkElem = styled(NavLink)`
    display: block;
    color: black;
    text-decoration: none;
    font-weight: 600;
    &.active {
        color: red;
    }
    &:first-child {
        margin-right: 10px;
    }
`;

export { Nav, LinkElem };
