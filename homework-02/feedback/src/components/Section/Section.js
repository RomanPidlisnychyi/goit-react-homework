import React from 'react';
import { Title } from '../styles';
import PropTypes from 'prop-types';

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
